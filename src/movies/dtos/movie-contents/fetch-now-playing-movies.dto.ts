import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
  MovieDate,
} from '@/movies/dtos/shared.dto';

@ObjectType()
export class FetchNowPlayingMoviesResponse extends CommonFetchMoviesOutput {
  @Field(() => MovieDate)
  dates: MovieDate;
}

@InputType()
export class FetchNowPlayingMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchNowPlayingMoviesOutput extends CoreOutput {
  @Field(() => FetchNowPlayingMoviesResponse, { nullable: true })
  data?: FetchNowPlayingMoviesResponse;
}
