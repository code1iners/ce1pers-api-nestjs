import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberWithoutPassword } from 'src/member/dtos/member-without-password';

@InputType()
export class FindMemberInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  email?: string;
}

@ObjectType()
class FindMemberOutputData {
  @Field(() => MemberWithoutPassword)
  member: MemberWithoutPassword;
}

@ObjectType()
export class FindMemberOutput extends CoreOutput {
  @Field(() => FindMemberOutputData, { nullable: true })
  data?: FindMemberOutputData;
}
