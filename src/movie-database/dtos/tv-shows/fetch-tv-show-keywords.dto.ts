import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTvShowKeywordsInput extends PickType(CommonFetchTvInput, [
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
export class FetchTvShowKeywordsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [TvKeywordsResult])
  results: TvKeywordsResult[];
}

@ObjectType()
export class FetchTvShowKeywordsOutput extends CoreOutput {
  @Field(() => FetchTvShowKeywordsResponse, { nullable: true })
  data?: FetchTvShowKeywordsResponse;
}
