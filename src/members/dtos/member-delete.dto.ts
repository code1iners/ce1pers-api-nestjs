import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MemberOutput } from '@/members/dtos/member-common.dto';
import { Member } from '@/members/entities/member.entity';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class MemberDeleteInput extends PickType(Member, ['id'], InputType) {}

@ObjectType()
export class MemberDeleteOutput extends CoreOutput {
  @Field(() => MemberOutput, { nullable: true })
  member?: MemberOutput;
}
