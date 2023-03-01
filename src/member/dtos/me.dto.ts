import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberWithoutPassword } from 'src/member/dtos/member-without-password';

@ObjectType()
export class MeOutput extends CoreOutput {
  @Field(() => MemberWithoutPassword, { nullable: true })
  data?: MemberWithoutPassword;
}
