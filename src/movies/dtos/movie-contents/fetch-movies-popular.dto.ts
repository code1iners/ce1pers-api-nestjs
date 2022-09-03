import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
  MediaContentResult,
} from '@/movies/dtos/shared.dto';

@ObjectType()
export class FetchMoviePopularResponse extends CommonFetchMoviesOutput {}

@InputType()
export class FetchMoviePopularInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchMoviePopularOutput extends CoreOutput {
  @Field(() => FetchMoviePopularResponse, { nullable: true })
  data?: FetchMoviePopularResponse;
}
