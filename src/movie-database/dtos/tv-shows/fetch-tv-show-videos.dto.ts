import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';
import { AppendToResponseVideosResult } from '@/movie-database/dtos/movies/shared.dto';

@InputType()
export class FetchTvShowVideosInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {}

@ObjectType()
export class FetchTvShowVideosResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [AppendToResponseVideosResult])
  results: AppendToResponseVideosResult[];
}

@ObjectType()
export class FetchTvShowVideosOutput extends CoreOutput {
  @Field(() => FetchTvShowVideosResponse, { nullable: true })
  data?: FetchTvShowVideosResponse;
}
