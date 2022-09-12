import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTvOnTheAirListInput extends OmitType(CommonFetchTvListInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchTvOnTheAirListResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchTvOnTheAirListOutput extends CoreOutput {
  @Field(() => FetchTvOnTheAirListResponse, { nullable: true })
  data?: FetchTvOnTheAirListResponse;
}
