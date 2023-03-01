import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberWithoutPassword } from 'src/member/dtos/member-without-password';

@InputType()
export class FindMembersInput {}

@ObjectType()
class FindMembersOutputData {
  @Field(() => [MemberWithoutPassword])
  members: MemberWithoutPassword[];
}

@ObjectType()
export class FindMembersOutput extends CoreOutput {
  @Field(() => FindMembersOutputData, { nullable: true })
  data?: FindMembersOutputData;
}
