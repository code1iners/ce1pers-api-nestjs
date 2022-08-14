import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { RepositoriesService } from '@/repositories/repositories.service';
import {
  MemberListInput,
  MemberListOutput,
} from '@/members/dtos/member-list.dto';
import {
  MemberRetrieveInput,
  MemberRetrieveOutput,
} from '@/members/dtos/member-retrieve.dto';
import {
  MemberCreateInput,
  MemberCreateOutput,
} from '@/members/dtos/member.create.dto';
import {
  MemberDeleteInput,
  MemberDeleteOutput,
} from '@/members/dtos/member-delete.dto';
import {
  MemberUpdateInput,
  MemberUpdateOutput,
} from '@/members/dtos/member-update.dto';

const HASH_SALT = 10;

@Injectable()
export class MembersService {
  constructor(private readonly repositoryService: RepositoriesService) {}

  async findAll(inputs: MemberListInput): Promise<MemberListOutput> {
    inputs;
    try {
      const members = await this.repositoryService.member.findMany({
        select: {
          id: true,
          email: true,
          username: true,
        },
      });

      return {
        ok: true,
        members,
      };
    } catch (error) {
      console.error('[findAll]', error);
      return {
        ok: false,
        error: 'Failed find members.',
      };
    }
  }

  async findMember({ id }: MemberRetrieveInput): Promise<MemberRetrieveOutput> {
    try {
      const member = await this.repositoryService.member.findUnique({
        where: { id },
      });
      if (!member) throw new Error('The member does not found.');

      return {
        ok: true,
        member,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  async createMember(input: MemberCreateInput): Promise<MemberCreateOutput> {
    try {
      // Encrypt member password.
      let password;
      try {
        password = await hash(input.password, HASH_SALT);
      } catch (error) {
        throw new InternalServerErrorException('Failed hashing password.');
      }

      const member = await this.repositoryService.member.create({
        data: { ...input, password },
      });
      if (!member) throw new Error('Failed create the member.');

      return {
        ok: true,
        member,
      };
    } catch (error) {
      console.error('[createMember]', error);
      return {
        ok: false,
        error,
      };
    }
  }

  async deleteMember({ id }: MemberDeleteInput): Promise<MemberDeleteOutput> {
    try {
      const member = await this.repositoryService.member.delete({
        where: { id },
      });
      if (!member) throw new Error('Failed delete the member.');

      return {
        ok: true,
        member,
      };
    } catch (error) {
      console.error('[deleteMember]', error);
      return {
        ok: false,
        error,
      };
    }
  }

  async updateMember({
    id,
    username,
    password,
  }: MemberUpdateInput): Promise<MemberUpdateOutput> {
    try {
      // If input has password, Encrypt member password.
      let newPassword;
      if (password) {
        try {
          newPassword = await hash(password, HASH_SALT);
        } catch (error) {
          throw new InternalServerErrorException('Failed hashing password.');
        }
      }

      const member = await this.repositoryService.member.update({
        where: { id },
        data: {
          username,
          ...(newPassword && { password: newPassword }),
        },
      });
      if (!member) throw new Error('Failed update the member.');

      return {
        ok: true,
        member,
      };
    } catch (error) {
      console.error('[updateMember]', error);

      return {
        ok: false,
        error,
      };
    }
  }
}
