import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { FindMemberOutputData } from 'src/member/dtos/find-member.dto';
import { MemberEntity } from 'src/member/entities/member.entity';

@InputType()
export class LoginInput extends PickType(
  MemberEntity,
  ['email', 'password'] as const,
  InputType,
) {}

@ObjectType()
class LoginOutputDataAuthorizations {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class LoginOutputData {
  @Field(() => LoginOutputDataAuthorizations)
  authorizations: LoginOutputDataAuthorizations;

  @Field(() => FindMemberOutputData)
  profile: FindMemberOutputData;
}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field(() => LoginOutputData, { nullable: true })
  data?: LoginOutputData;
}
