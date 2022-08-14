import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { MemberOutput } from '@/members/dtos/member-common.dto';

@InputType()
export class MemberRetrieveInput {
  @Field(() => Int)
  id: number;
}

@ObjectType()
export class MemberRetrieveOutput extends CoreOutput {
  @Field(() => MemberOutput, { nullable: true })
  member?: MemberOutput;
}
