import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchRecommendationTvShowsInput extends PickType(
  CommonFetchTvInput,
  ['tvId', 'language', 'page'] as const,
) {}

@ObjectType()
export class FetchRecommendationTvShowsResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchRecommendationTvShowsOutput extends CoreOutput {
  @Field(() => FetchRecommendationTvShowsResponse, { nullable: true })
  data?: FetchRecommendationTvShowsResponse;
}
