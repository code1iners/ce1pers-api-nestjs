import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  FetchMovieDetailsResponse,
  CommonFetchMoviesInput,
} from '@/movie-database/dtos/movie-contents/shared.dto';

@InputType()
export class FetchLatestMovieInput extends PickType(CommonFetchMoviesInput, [
  'language',
] as const) {}

@ObjectType()
export class FetchLatestMovieOutput extends CoreOutput {
  @Field(() => FetchMovieDetailsResponse, { nullable: true })
  data?: FetchMovieDetailsResponse;
}
