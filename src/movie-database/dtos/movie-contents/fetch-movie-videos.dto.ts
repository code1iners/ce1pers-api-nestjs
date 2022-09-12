import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  AppendToResponseVideosResult,
  CommonFetchMovieInput,
} from '@/movie-database/dtos/movie-contents/shared.dto';

@InputType()
export class FetchMovieVideosByIdInput extends PickType(CommonFetchMovieInput, [
  'movieId',
  'language',
] as const) {}

@ObjectType()
export class FetchMovieVideosByIdResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [AppendToResponseVideosResult])
  results: AppendToResponseVideosResult[];
}

@ObjectType()
export class FetchMovieVideosByIdOutput extends CoreOutput {
  @Field(() => FetchMovieVideosByIdResponse, { nullable: true })
  data?: FetchMovieVideosByIdResponse;
}
