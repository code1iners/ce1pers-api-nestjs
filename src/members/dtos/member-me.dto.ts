import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { MemberOutput } from '@/members/dtos/member-common.dto';

@ObjectType()
export class MemberMeOutput extends CoreOutput {
  @Field(() => MemberOutput, { nullable: true })
  member?: MemberOutput;
}
