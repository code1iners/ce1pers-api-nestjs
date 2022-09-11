import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvInput,
  FetchTvListResponse,
} from '@/movies/dtos/tv-contents/shared.dto';

@InputType()
export class FetchSimilarTvShowsInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {}

@ObjectType()
export class FetchSimilarTvShowsResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchSimilarTvShowsOutput extends CoreOutput {
  @Field(() => FetchSimilarTvShowsResponse, { nullable: true })
  data?: FetchSimilarTvShowsResponse;
}
