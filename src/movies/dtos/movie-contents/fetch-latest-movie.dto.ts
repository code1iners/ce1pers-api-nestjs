import { Field, InputType, ObjectType, Int, Float } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  FetchMovieDetailsResponse,
  FetchMoviesLanguageInput,
} from '@/movies/dtos/shared.dto';

@InputType()
export class FetchLatestMovieInput extends FetchMoviesLanguageInput {}

@ObjectType()
export class FetchLatestMovieOutput extends CoreOutput {
  @Field(() => FetchMovieDetailsResponse, { nullable: true })
  data?: FetchMovieDetailsResponse;
}
