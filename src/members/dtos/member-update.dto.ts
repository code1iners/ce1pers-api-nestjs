import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Member } from '@/members/entities/member.entity';
import { CoreOutput } from '@/core/dtos/core.dto';
import { MemberOutput } from '@/members/dtos/member-common.dto';

@InputType()
export class MemberUpdateInput extends PickType(
  Member,
  ['id', 'username'],
  InputType,
) {}

@ObjectType()
export class MemberUpdateOutput extends CoreOutput {
  @Field(() => MemberOutput, { nullable: true })
  member?: MemberOutput;
}
