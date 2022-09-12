import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchMoviesInput } from './shared.dto';

@InputType()
export class FetchMovieGenreListInput extends PickType(CommonFetchMoviesInput, [
  'language',
] as const) {}

@ObjectType()
class FetchMovieGenreResult {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchMovieGenreListResponse {
  @Field(() => [FetchMovieGenreResult])
  genres: FetchMovieGenreResult[];
}

@ObjectType()
export class FetchMovieGenreListOutput extends CoreOutput {
  @Field(() => FetchMovieGenreListResponse, { nullable: true })
  data?: FetchMovieGenreListResponse;
}
