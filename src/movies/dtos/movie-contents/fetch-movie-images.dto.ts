import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchMovieInput, MovieImage } from '@/movies/dtos/shared.dto';

@InputType()
export class FetchMovieImagesByIdInput extends PickType(CommonFetchMovieInput, [
  'movieId',
] as const) {}

@ObjectType()
export class FetchMovieImagesResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [MovieImage])
  backdrops: MovieImage[];

  @Field(() => [MovieImage])
  logos: MovieImage[];

  @Field(() => [MovieImage])
  posters: MovieImage[];
}

@ObjectType()
export class FetchMovieImagesByIdOutput extends CoreOutput {
  @Field(() => FetchMovieImagesResponse, { nullable: true })
  data?: FetchMovieImagesResponse;
}