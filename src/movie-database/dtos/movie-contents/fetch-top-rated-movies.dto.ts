import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
} from '@/movie-database/dtos/movie-contents/shared.dto';

@ObjectType()
export class FetchTopRatedMoviesResponse extends CommonFetchMoviesOutput {}

@InputType()
export class FetchTopRatedMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchTopRatedMoviesOutput extends CoreOutput {
  @Field(() => FetchTopRatedMoviesResponse, { nullable: true })
  data?: FetchTopRatedMoviesResponse;
}
