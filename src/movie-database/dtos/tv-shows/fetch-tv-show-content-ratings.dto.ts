import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class FetchTvShowContentRatingsInput extends PickType(
  CommonFetchTvInput,
  ['tvId', 'language'] as const,
) {}

@ObjectType()
class FetchTvShowContentRatingsResult {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  rating: string;
}

@ObjectType()
export class FetchTvShowContentRatingsResponse {
  @Field(() => [FetchTvShowContentRatingsResult])
  results: FetchTvShowContentRatingsResult[];
}

@ObjectType()
export class FetchTvShowContentRatingsOutput extends CoreOutput {
  @Field(() => FetchTvShowContentRatingsResponse, { nullable: true })
  data?: FetchTvShowContentRatingsResponse;
}
