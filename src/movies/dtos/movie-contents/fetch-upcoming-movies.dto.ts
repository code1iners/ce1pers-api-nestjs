import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
  MovieDate,
} from '@/movies/dtos/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class FetchUpcomingMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchUpcomingMoviesResponse extends CommonFetchMoviesOutput {
  @Field(() => MovieDate)
  dates: MovieDate;
}

@ObjectType()
export class FetchUpcomingMoviesOutput extends CoreOutput {
  @Field(() => FetchUpcomingMoviesResponse, { nullable: true })
  data?: FetchUpcomingMoviesResponse;
}
