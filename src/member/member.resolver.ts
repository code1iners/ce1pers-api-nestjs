import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberEntity } from 'src/member/entities/member.entity';
import { MemberService } from 'src/member/member.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { failure } from 'src/helpers/error-helpers';
import { ServiceKind, ServiceKindObject } from 'src/auth/auth.decorator';
import { FindMembersOutput } from 'src/member/dtos/find-members.dto';
import {
  FindMemberOutput,
  FindMemberInput,
  FindMemberOutputData,
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
import {
  EmailAvailabilityInput,
  EmailAvailabilityOutput,
} from 'src/member/dtos/email-availability.dto';

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
    if (input.id)
      return await this.memberService.findMemberById(serviceKind, input.id);
    else if (input.username)
      return await this.memberService.findMemberByUsername(
        serviceKind,
        input.username,
      );
    else if (input.email)
      return await this.memberService.findMemberByEmail(
        serviceKind,
        input.email,
      );
    return failure('Parameter is required.', 'findMember:else');
  }

  @Query(() => FindMemberOutputData)
  @UseGuards(AuthGuard)
  me(@Context() context: any): FindMemberOutputData {
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
  @UseGuards(AuthGuard)
  async updateMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: UpdateMemberInput,
  ) {
    return await this.memberService.updateMember(serviceKind, input);
  }

  @Mutation(() => DeleteMemberOutput)
  @UseGuards(AuthGuard)
  async deleteMember(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: DeleteMemberInput,
  ) {
    return await this.memberService.deleteMember(serviceKind, input);
  }

  @Query(() => EmailAvailabilityOutput)
  async emailAvailability(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: EmailAvailabilityInput,
  ) {
    return await this.memberService.emailAvailability(serviceKind, input);
  }
}
