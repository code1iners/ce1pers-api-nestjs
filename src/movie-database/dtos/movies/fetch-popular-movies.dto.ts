import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
} from '@/movie-database/dtos/movies/shared.dto';

@ObjectType()
export class FetchPopularMoviesResponse extends CommonFetchMoviesOutput {}

@InputType()
export class FetchPopularMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchPopularMoviesOutput extends CoreOutput {
  @Field(() => FetchPopularMoviesResponse, { nullable: true })
  data?: FetchPopularMoviesResponse;
}
