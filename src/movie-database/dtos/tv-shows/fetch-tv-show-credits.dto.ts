import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';
import { CommonMovieCastAndCrew } from '@/movie-database/dtos/movies/shared.dto';

@InputType()
export class FetchTvShowCreditsInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {}

@ObjectType()
export class TvShowCast extends CommonMovieCastAndCrew {
  @Field(() => String)
  character: string;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class TvShowCrew extends CommonMovieCastAndCrew {
  @Field(() => String)
  department: string;

  @Field(() => String)
  job: string;
}

@ObjectType()
export class FetchTvShowCreditsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [TvShowCast])
  cast: TvShowCast[];

  @Field(() => [TvShowCrew])
  crew: TvShowCrew[];
}

@ObjectType()
export class FetchTvShowCreditsOutput extends CoreOutput {
  @Field(() => FetchTvShowCreditsResponse, { nullable: true })
  data?: FetchTvShowCreditsResponse;
}
