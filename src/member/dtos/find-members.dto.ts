import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { FindMemberOutputData } from 'src/member/dtos/find-member.dto';

@InputType()
export class FindMembersInput {}

@ObjectType()
export class FindMembersOutput extends CoreOutput {
  @Field(() => [FindMemberOutputData], { nullable: true })
  data?: FindMemberOutputData[];
}
