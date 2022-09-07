import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
} from '@/movies/dtos/movie-contents/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@ObjectType()
export class FetchTopRatedMoviesResponse extends CommonFetchMoviesOutput {}

@InputType()
export class FetchTopRatedMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchTopRatedMoviesOutput extends CoreOutput {
  @Field(() => FetchTopRatedMoviesResponse, { nullable: true })
  data?: FetchTopRatedMoviesResponse;
}
