import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { OutputError, failure } from 'src/helpers/error-helpers';
import type { FindMembersOutput } from 'src/member/dtos/find-members.dto';
import {
  FindMemberOutput,
  findMemberFragment,
} from 'src/member/dtos/find-member.dto';
import type {
  CreateMemberInput,
  CreateMemberOutput,
} from 'src/member/dtos/create-member.dto';
import type {
  DeleteMemberInput,
  DeleteMemberOutput,
} from 'src/member/dtos/delete-member.dto';
import type {
  UpdateMemberInput,
  UpdateMemberOutput,
} from 'src/member/dtos/update-member.dto';
import { ServiceKindObject } from 'src/auth/auth.decorator';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  async findMembers(
    serviceKind: ServiceKindObject,
  ): Promise<FindMembersOutput> {
    try {
      // Find members by service code.
      const foundMemberProfiles = await this.prisma.profile.findMany({
        where: { service: { serviceCode: serviceKind.serviceCode } },
        select: findMemberFragment,
      });

      return { ok: true, data: foundMemberProfiles };
    } catch (err) {
      return failure(err.message, 'findMembers:catch');
    }
  }

  async findMemberById(
    serviceKind: ServiceKindObject,
    memberId: number,
  ): Promise<FindMemberOutput> {
    try {
      const foundMember = await this.prisma.profile.findFirst({
        where: {
          AND: [
            { id: memberId },
            { service: { serviceCode: serviceKind.serviceCode } },
          ],
        },
        select: findMemberFragment,
      });

      if (!foundMember)
        return failure(
          'Does not found the member.',
          'findMemberById:foundMember',
        );

      return { ok: true, data: foundMember };
    } catch (err) {
      return failure(err.message, 'findMemberById:catch');
    }
  }

  async findMemberByEmail(
    serviceKind: ServiceKindObject,
    memberEmail: string,
  ): Promise<FindMemberOutput> {
    try {
      const foundMember = await this.prisma.member.findFirst({
        where: {
          AND: [
            { email: memberEmail },
            {
              profiles: {
                some: { service: { serviceCode: serviceKind.serviceCode } },
              },
            },
          ],
        },
        select: {
          profiles: {
            select: findMemberFragment,
          },
        },
      });

      if (!foundMember) {
        return failure(
          'Does not found the member.',
          'findMemberByEmail:foundMember',
        );
      }

      if (!foundMember.profiles.length) {
        return failure(
          'Does not exist the member in the service.',
          'findMemberByEmail:foundMemberProfiles',
        );
      }

      const [foundMemberProfile] = foundMember.profiles;

      return { ok: true, data: foundMemberProfile };
    } catch (err) {
      return failure(err.message, 'findMemberByEmail:catch');
    }
  }

  async findMemberByUsername(
    serviceKind: ServiceKindObject,
    memberUsername: string,
  ): Promise<FindMemberOutput> {
    try {
      const foundMember = await this.prisma.profile.findFirst({
        where: {
          username: memberUsername,
          service: { serviceCode: serviceKind.serviceCode },
        },
      });

      if (!foundMember)
        return failure(
          'Does not found the member.',
          'findMemberByUsername:foundMember',
        );

      return { ok: true, data: foundMember };
    } catch (err) {
      return failure(err.message, 'findMemberByUsername:catch');
    }
  }

  async createMember(
    serviceKind: ServiceKindObject,
    input: CreateMemberInput,
  ): Promise<CreateMemberOutput> {
    try {
      const {
        email,
        password,
        username,
        birthdate,
        phoneNumber,
        loginType,
        gender,
      } = input;

      // Already exists?
      const foundMember = await this.prisma.member.findFirst({
        where: {
          AND: [
            { email },
            {
              profiles: {
                some: {
                  phoneNumber,
                  service: { serviceCode: serviceKind.serviceCode },
                },
              },
            },
          ],
        },
        select: {
          id: true,
        },
      });
      if (foundMember) {
        return failure('Already exist the member.', 'createMember:foundMember');
      }

      // Hashing password.
      let hashedPassword = '';
      try {
        hashedPassword = await hash(password, 10);
      } catch (err) {
        return failure(err.message, 'E03');
      }

      const profilesCreateFragment = {
        username,
        phoneNumber,
        birthdate,
        gender,
        loginType,
        service: {
          create: {
            serviceCode: serviceKind.serviceCode,
            serviceName: serviceKind.serviceName,
          },
        },
      };

      // Create member.
      await this.prisma.member.upsert({
        where: {
          email,
        },
        create: {
          email,
          password: hashedPassword,
          profiles: {
            create: profilesCreateFragment,
          },
        },
        update: {
          profiles: {
            create: profilesCreateFragment,
          },
        },
      });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async updateMember(
    serviceKind: ServiceKindObject,
    input: UpdateMemberInput,
  ): Promise<UpdateMemberOutput> {
    try {
      const { id } = input;

      const { ok, error } = await this.findMemberById(serviceKind, id);
      if (!ok) {
        return failure(error.message, 'updateMember:foundMember');
      }

      // Hashing password.
      let hashedPassword = '';
      if (input.password) {
        try {
          hashedPassword = await hash(input.password, 10);
        } catch (err) {
          throw new OutputError(err.message, 'E03');
        }
      }

      // Update member profile.
      await this.prisma.profile.update({
        where: { id },
        data: {
          ...input,
          ...(hashedPassword && { password: hashedPassword }),
        },
      });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async deleteMember(
    serviceKind: ServiceKindObject,
    input: DeleteMemberInput,
  ): Promise<DeleteMemberOutput> {
    try {
      const { id } = input;

      const { ok, error } = await this.findMemberById(serviceKind, id);
      if (!ok) {
        return failure(error.message, 'deleteMember:foundMember');
      }
      await this.prisma.profile.delete({ where: { id } });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }
}
