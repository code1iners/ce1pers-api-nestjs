import { Injectable } from '@nestjs/common';
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
      const member = await this.repositoryService.member.create({
        data: { ...input },
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
  }: MemberUpdateInput): Promise<MemberUpdateOutput> {
    try {
      const member = await this.repositoryService.member.update({
        where: { id },
        data: { username },
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
