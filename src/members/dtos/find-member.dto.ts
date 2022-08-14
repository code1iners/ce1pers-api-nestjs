import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { Member } from '@/members/models/member.model';

@ObjectType()
export class FindMembersOutput extends CoreOutput {
  @Field(() => [Member])
  members: Member[];
}

@InputType()
export class FindMemberInput {
  @Field(() => ID)
  id: number;
}

@ObjectType()
export class FindMemberOutput extends CoreOutput {
  @Field(() => Member)
  member: Member;
}
