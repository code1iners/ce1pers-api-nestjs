import {
  MemberRetrieveInput,
  MemberRetrieveOutput,
} from '@/members/dtos/member-retrieve.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Member } from '@/members/entities/member.entity';
import {
  MemberListInput,
  MemberListOutput,
} from '@/members/dtos/member-list.dto';
import { MembersService } from '@/members/members.service';
import {
  MemberCreateInput,
  MemberCreateOutput,
} from './dtos/member.create.dto';
import {
  MemberUpdateInput,
  MemberUpdateOutput,
} from './dtos/member-update.dto';
import {
  MemberDeleteInput,
  MemberDeleteOutput,
} from './dtos/member-delete.dto';

@Resolver(() => Member)
export class MembersResolver {
  constructor(private readonly membersService: MembersService) {}

  @Query(() => MemberListOutput)
  async findMembers(
    @Args('input') input: MemberListInput,
  ): Promise<MemberListOutput> {
    return this.membersService.findAll(input);
  }

  @Query(() => MemberRetrieveOutput)
  async findMember(
    @Args('input') input: MemberRetrieveInput,
  ): Promise<MemberRetrieveOutput> {
    return this.membersService.findMember(input);
  }

  @Mutation(() => MemberCreateOutput)
  async createMember(
    @Args('input') input: MemberCreateInput,
  ): Promise<MemberCreateOutput> {
    return this.membersService.createMember(input);
  }

  @Mutation(() => MemberUpdateOutput)
  async updateMember(
    @Args('input') input: MemberUpdateInput,
  ): Promise<MemberUpdateOutput> {
    return this.membersService.updateMember(input);
  }

  @Mutation(() => MemberDeleteOutput)
  async deleteMember(
    @Args('input') input: MemberDeleteInput,
  ): Promise<MemberDeleteOutput> {
    return this.membersService.deleteMember(input);
  }
}
