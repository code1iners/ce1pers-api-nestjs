import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberEntity } from 'src/member/entities/member.entity';
import { MemberService } from 'src/member/member.service';
import { AuthGuard } from 'src/auth/auth.guard';
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
  DeleteMemberOutput,
  DeleteMemberInput,
} from 'src/member/dtos/delete-member.dto';
import {
  UpdateMemberInput,
  UpdateMemberOutput,
} from 'src/member/dtos/update-member.dto';
import { MemberWithoutPassword } from 'src/member/dtos/member-without-password';

@Resolver(() => MemberEntity)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Query(() => FindMembersOutput)
  async members(): Promise<FindMembersOutput> {
    return await this.memberService.findMembers();
  }

  @Query(() => FindMemberOutput)
  async member(
    @Args('input') input: FindMemberInput,
  ): Promise<FindMemberOutput> {
    return await this.memberService.findMember(input);
  }

  @Query(() => MemberWithoutPassword)
  @UseGuards(AuthGuard)
  me(@Context() context: any): MemberWithoutPassword {
    return context.req['member'];
  }

  @Mutation(() => CreateMemberOutput)
  async createMember(@Args('input') input: CreateMemberInput) {
    return await this.memberService.createMember(input);
  }

  @Mutation(() => DeleteMemberOutput)
  async deleteMember(@Args('input') input: DeleteMemberInput) {
    return await this.memberService.deleteMember(input);
  }

  @Mutation(() => UpdateMemberOutput)
  async updateMember(@Args('input') input: UpdateMemberInput) {
    return await this.memberService.updateMember(input);
  }
}
