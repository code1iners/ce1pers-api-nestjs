import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class FetchKeywordDetailsInput {
  @Field(() => Int)
  keywordId: number;
}

@ObjectType()
export class FetchKeywordDetailsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchKeywordDetailsOutput extends CoreOutput {
  @Field(() => FetchKeywordDetailsResponse, { nullable: true })
  data?: FetchKeywordDetailsResponse;
}
