import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchOnTheAirTvShowsInput extends OmitType(
  CommonFetchTvListInput,
  ['region'] as const,
) {}

@ObjectType()
export class FetchOnTheAirTvShowsResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchOnTheAirTvShowsOutput extends CoreOutput {
  @Field(() => FetchOnTheAirTvShowsResponse, { nullable: true })
  data?: FetchOnTheAirTvShowsResponse;
}
