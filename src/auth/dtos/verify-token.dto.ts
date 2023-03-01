import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';

@InputType()
export class VerifyTokenInput {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class VerifyTokenOutputData {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@ObjectType()
export class VerifyTokenOutput extends CoreOutput {
  @Field(() => VerifyTokenOutputData, { nullable: true })
  data?: VerifyTokenOutputData;
}
