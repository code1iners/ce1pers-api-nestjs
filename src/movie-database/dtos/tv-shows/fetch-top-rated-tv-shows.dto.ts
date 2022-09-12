import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTopRatedTvShowsInput extends OmitType(
  CommonFetchTvListInput,
  ['region'] as const,
) {}

@ObjectType()
export class FetchTopRatedTvShowsResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchTopRatedTvShowsOutput extends CoreOutput {
  @Field(() => FetchTopRatedTvShowsResponse, { nullable: true })
  data?: FetchTopRatedTvShowsResponse;
}
