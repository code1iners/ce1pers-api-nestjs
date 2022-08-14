import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Member } from '@/members/entities/member.entity';
import { MemberOutput } from '@/members/dtos/member-common.dto';

@InputType()
export class MemberListInput {
  @Field(() => Int, { nullable: true })
  page?: number;
}

@ObjectType()
export class MemberListOutput extends CoreOutput {
  @Field(() => [MemberOutput], { nullable: true })
  members?: MemberOutput[];
}
