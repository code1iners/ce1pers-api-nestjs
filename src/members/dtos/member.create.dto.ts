import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { Member } from '@/members/entities/member.entity';
import { MemberOutput } from '@/members/dtos/member-common.dto';

@InputType()
export class MemberCreateInput extends PickType(
  Member,
  ['email', 'username', 'password'],
  InputType,
) {}

@ObjectType()
export class MemberCreateOutput extends CoreOutput {
  @Field(() => MemberOutput, { nullable: true })
  member?: MemberOutput;
}
