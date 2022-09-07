import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchMovieInput } from '@/movies/dtos/movie-contents/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class FetchMovieAlternativeTitlesInput extends PickType(
  CommonFetchMovieInput,
  ['movieId'],
) {}

@ObjectType()
class MovieAlternativeTitle {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  type: string;
}

@ObjectType()
export class FetchMovieAlternativeTitlesResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [MovieAlternativeTitle])
  titles: MovieAlternativeTitle[];
}

@ObjectType()
export class FetchMovieAlternativeTitlesOutput extends CoreOutput {
  @Field(() => FetchMovieAlternativeTitlesResponse, { nullable: true })
  data?: FetchMovieAlternativeTitlesResponse;
}
