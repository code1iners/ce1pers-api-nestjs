import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchPopularTvShowsInput extends OmitType(CommonFetchTvListInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchPopularTvShowsResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchPopularTvShowsOutput extends CoreOutput {
  @Field(() => FetchPopularTvShowsResponse, { nullable: true })
  data?: FetchPopularTvShowsResponse;
}
