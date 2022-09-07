import { Field, InputType, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvInput,
  FetchTvListResponse,
} from '@/movies/dtos/tv-contents/shared.dto';

@InputType()
export class FetchPopularTvListInput extends OmitType(CommonFetchTvInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchPopularTvListResponse extends FetchTvListResponse {}

@ObjectType()
export class FetchPopularTvListOutput extends CoreOutput {
  @Field(() => FetchPopularTvListResponse, { nullable: true })
  data?: FetchPopularTvListResponse;
}
