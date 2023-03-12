import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberEntity } from 'src/member/entities/member.entity';
import { MemberService } from 'src/member/member.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { FindMembersOutput } from 'src/member/dtos/find-members.dto';
import {
  FindMemberByIdInput,
  FindMemberByEmailInput,
  FindMemberOutput,
  FindMemberInput,
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
import { ServiceKind, ServiceKindObject } from 'src/auth/auth.decorator';

@Resolver(() => MemberEntity)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Query(() => FindMembersOutput)
  async findMembers(
    @ServiceKind() serviceKind: ServiceKindObject,
  ): Promise<FindMembersOutput> {
    return await this.memberService.findMembers(serviceKind);
  }

  @Query(() => FindMemberOutput)
  async findMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: FindMemberInput,
  ): Promise<FindMemberOutput> {
    return input.id
      ? await this.memberService.findMemberById(serviceKind, input.id)
      : await this.memberService.findMemberByUsername(
          serviceKind,
          input.username,
        );
  }

  @Query(() => MemberWithoutPassword)
  @UseGuards(AuthGuard)
  me(@Context() context: any): MemberWithoutPassword {
    return context.req['member'];
  }

  @Mutation(() => CreateMemberOutput)
  async createMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: CreateMemberInput,
  ) {
    return await this.memberService.createMember(serviceKind, input);
  }

  @Mutation(() => UpdateMemberOutput)
  async updateMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: UpdateMemberInput,
  ) {
    return await this.memberService.updateMember(serviceKind, input);
  }

  @Mutation(() => DeleteMemberOutput)
  async deleteMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: DeleteMemberInput,
  ) {
    return await this.memberService.deleteMember(serviceKind, input);
  }
}
