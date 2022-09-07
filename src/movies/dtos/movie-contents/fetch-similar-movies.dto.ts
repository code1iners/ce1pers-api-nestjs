import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import {
  CommonFetchMovieInput,
  CommonFetchMoviesOutput,
} from '@/movies/dtos/movie-contents/shared.dto';

@InputType()
export class FetchSimilarMoviesByIdInput extends OmitType(
  CommonFetchMovieInput,
  ['region'] as const,
) {}

@ObjectType()
export class FetchSimilarMoviesByIdOutput extends CoreOutput {
  @Field(() => CommonFetchMoviesOutput, { nullable: true })
  data?: CommonFetchMoviesOutput;
}
