import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { OutputError, failure } from 'src/helpers/error-helpers';
import { FindMembersOutput } from 'src/member/dtos/find-members.dto';
import {
  FindMemberInput,
  FindMemberOutput,
} from 'src/member/dtos/find-member.dto';
import {
  CreateMemberInput,
  CreateMemberOutput,
} from 'src/member/dtos/create-member.dto';
import {
  DeleteMemberInput,
  DeleteMemberOutput,
} from 'src/member/dtos/delete-member.dto';
import {
  UpdateMemberInput,
  UpdateMemberOutput,
} from 'src/member/dtos/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService) {}

  async findMembers(): Promise<FindMembersOutput> {
    try {
      const members = await this.prisma.member.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          birthdate: true,
          isDormant: true,
          isEmailVerified: true,
          isPhoneNumberVerified: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return { ok: true, data: { members } };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async findMember(input: FindMemberInput): Promise<FindMemberOutput> {
    try {
      const member = await this.prisma.member.findUnique({
        where: { ...input },
        select: {
          id: true,
          email: true,
          name: true,
          phoneNumber: true,
          birthdate: true,
          isDormant: true,
          isEmailVerified: true,
          isPhoneNumberVerified: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!member) throw new OutputError('Does not found the member', 'E02');

      return {
        ok: true,
        data: { member },
      };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async createMember(input: CreateMemberInput): Promise<CreateMemberOutput> {
    try {
      const { email, password } = input;

      const foundMember = await this.prisma.member.findUnique({
        where: { email },
        select: { id: true },
      });
      if (foundMember)
        throw new OutputError('Already exist the member.', 'E02');

      // Hashing password.
      let hashedPassword = '';
      try {
        hashedPassword = await hash(password, 10);
      } catch (err) {
        throw new OutputError(err.message, 'E03');
      }

      await this.prisma.member.create({
        data: { ...input, password: hashedPassword },
      });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async updateMember(input: UpdateMemberInput): Promise<UpdateMemberOutput> {
    try {
      const { id } = input;

      const foundMember = await this.prisma.member.findUnique({
        where: { id },
        select: { id: true },
      });
      if (!foundMember)
        throw new OutputError('The member does not found', 'E02');

      // Hashing password.
      let hashedPassword = '';
      if (input.password) {
        try {
          hashedPassword = await hash(input.password, 10);
        } catch (err) {
          throw new OutputError(err.message, 'E03');
        }
      }

      await this.prisma.member.update({
        data: {
          ...input,
          ...(hashedPassword && { password: hashedPassword }),
        },
        where: { id: input.id },
      });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async deleteMember(input: DeleteMemberInput): Promise<DeleteMemberOutput> {
    try {
      const { id } = input;

      const foundMember = await this.prisma.member.findUnique({
        where: { id },
        select: { id: true },
      });
      if (!foundMember)
        throw new OutputError('Does not found the member', 'E02');

      await this.prisma.member.delete({ where: { id } });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }
}
