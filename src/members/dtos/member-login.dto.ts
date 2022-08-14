import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Member } from '@/members/entities/member.entity';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class MemberLoginInput extends PickType(
  Member,
  ['email', 'password'],
  InputType,
) {}

@ObjectType()
export class MemberLoginOutput extends CoreOutput {
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
