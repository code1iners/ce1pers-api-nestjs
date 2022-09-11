import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movies/dtos/tv-contents/shared.dto';

@InputType()
export class FetchTvReviewsInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {}

@ObjectType()
class TvReviewsResultAuthorDetails {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String, { nullable: true })
  avatarPath?: string;

  @Field(() => Float)
  rating: number;
}

@ObjectType()
class TvReviewsResult {
  @Field(() => String)
  id: string;

  @Field(() => String)
  author: string;

  @Field(() => TvReviewsResultAuthorDetails)
  authorDetails: TvReviewsResultAuthorDetails;

  @Field(() => String)
  content: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class FetchTvReviewsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  page: number;

  @Field(() => [TvReviewsResult])
  results: TvReviewsResult[];

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  totalResults: number;
}

@ObjectType()
export class FetchTvReviewsOutput extends CoreOutput {
  @Field(() => FetchTvReviewsResponse, { nullable: true })
  data?: FetchTvReviewsResponse;
}
