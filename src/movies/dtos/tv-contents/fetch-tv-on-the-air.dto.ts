import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movies/dtos/tv-contents/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

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
