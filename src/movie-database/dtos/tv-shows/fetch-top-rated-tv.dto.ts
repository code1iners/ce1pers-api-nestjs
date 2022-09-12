import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvListResponse,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTopRatedTvListInput extends OmitType(CommonFetchTvListInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchTopRatedTvListResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchTopRatedTvListOutput extends CoreOutput {
  @Field(() => FetchTopRatedTvListResponse, { nullable: true })
  data?: FetchTopRatedTvListResponse;
}
