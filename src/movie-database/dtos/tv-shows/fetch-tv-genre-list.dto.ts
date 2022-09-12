import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTvShowGenreListInput extends PickType(CommonFetchTvInput, [
  'language',
] as const) {}

@ObjectType()
class FetchShowTvGenreResult {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchTvShowGenreListResponse {
  @Field(() => [FetchShowTvGenreResult])
  genres: FetchShowTvGenreResult[];
}

@ObjectType()
export class FetchTvShowGenreListOutput extends CoreOutput {
  @Field(() => FetchTvShowGenreListResponse, { nullable: true })
  data?: FetchTvShowGenreListResponse;
}
