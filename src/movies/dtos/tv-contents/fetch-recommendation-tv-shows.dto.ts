import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import {
  CommonFetchTvInput,
  FetchTvListResponse,
} from '@/movies/dtos/tv-contents/shared.dto';

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
