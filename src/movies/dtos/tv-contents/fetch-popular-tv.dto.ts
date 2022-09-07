import { Field, InputType, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvInput,
  TvListResult,
} from '@/movies/dtos/tv-contents/shared.dto';

@InputType()
export class FetchPopularTvListInput extends OmitType(CommonFetchTvInput, [
  'region',
] as const) {}

@ObjectType()
export class FetchPopularTvListResponse {
  @Field(() => Int)
  page: number;

  @Field(() => [TvListResult])
  results: TvListResult[];
}

@ObjectType()
export class FetchPopularTvListOutput extends CoreOutput {
  @Field(() => FetchPopularTvListResponse, { nullable: true })
  data?: FetchPopularTvListResponse;
}
