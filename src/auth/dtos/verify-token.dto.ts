import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';

@InputType()
export class VerifyRefreshTokenInput {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class VerifyRefreshTokenOutputData {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class VerifyRefreshTokenOutput extends CoreOutput {
  @Field(() => VerifyRefreshTokenOutputData, { nullable: true })
  data?: VerifyRefreshTokenOutputData;
}

@InputType()
export class VerifyTokenInput {
  @Field(() => String)
  token: string;
}

@ObjectType()
export class VerifyTokenOutput extends CoreOutput {}
