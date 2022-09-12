import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';
import { AppendToResponseVideosResult } from '@/movie-database/dtos/movies/shared.dto';

@InputType()
export class FetchTvVideosInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {}

@ObjectType()
export class FetchTvVideosResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [AppendToResponseVideosResult])
  results: AppendToResponseVideosResult[];
}

@ObjectType()
export class FetchTvVideosOutput extends CoreOutput {
  @Field(() => FetchTvVideosResponse, { nullable: true })
  data?: FetchTvVideosResponse;
}
