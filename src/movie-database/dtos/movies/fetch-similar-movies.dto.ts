import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMovieInput,
  CommonFetchMoviesOutput,
} from '@/movie-database/dtos/movies/shared.dto';

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
