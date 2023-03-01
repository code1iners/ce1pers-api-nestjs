import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from 'src/member/entities/member.entity';
import { MemberWithoutPassword } from 'src/member/dtos/member-without-password';

@InputType()
export class FindMemberInput extends PickType(
  MemberEntity,
  ['id'] as const,
  InputType,
) {}

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
