import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from 'src/member/entities/member.entity';

@InputType()
export class LoginInput extends PickType(
  MemberEntity,
  ['email', 'password'] as const,
  InputType,
) {}

@ObjectType()
export class LoginOutputData {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field(() => LoginOutputData, { nullable: true })
  data?: LoginOutputData;
}
