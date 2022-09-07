import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import {
  CommonFetchTvInput,
  FetchTvListResponse,
} from '@/movies/dtos/tv-contents/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class FetchTopRatedTvListInput extends OmitType(CommonFetchTvInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchTopRatedTvListResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchTopRatedTvListOutput extends CoreOutput {
  @Field(() => FetchTopRatedTvListResponse, { nullable: true })
  data?: FetchTopRatedTvListResponse;
}
