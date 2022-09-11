import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchTvInput } from './shared.dto';

@InputType()
export class FetchTvKeywordsInput extends PickType(CommonFetchTvInput, [
  'tvId',
] as const) {}

@ObjectType()
class TvKeywordsResult {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  id: number;
}

@ObjectType()
export class FetchTvKeywordsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [TvKeywordsResult])
  results: TvKeywordsResult[];
}

@ObjectType()
export class FetchTvKeywordsOutput extends CoreOutput {
  @Field(() => FetchTvKeywordsResponse, { nullable: true })
  data?: FetchTvKeywordsResponse;
}
