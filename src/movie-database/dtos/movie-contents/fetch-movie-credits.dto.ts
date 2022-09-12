import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMovieInput,
  MovieCast,
  MovieCrew,
} from '@/movie-database/dtos/movie-contents/shared.dto';

@InputType()
export class FetchMovieCreditsByIdInput extends PickType(
  CommonFetchMovieInput,
  ['movieId', 'language'] as const,
) {}

@ObjectType()
export class FetchMovieCreditsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [MovieCast])
  cast: MovieCast[];

  @Field(() => [MovieCrew])
  crew: MovieCrew[];
}

@ObjectType()
export class FetchMovieCreditsByIdOutput extends CoreOutput {
  @Field(() => FetchMovieCreditsResponse, { nullable: true })
  data?: FetchMovieCreditsResponse;
}
