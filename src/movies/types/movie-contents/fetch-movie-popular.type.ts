import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { MediaContentResult } from '@/movies/types';

@ObjectType()
export class FetchMoviePopularResponse {
  @Field(() => Int)
  page: number;

  @Field(() => [MediaContentResult])
  results: MediaContentResult[];

  @Field(() => Int)
  totalResults: number;

  @Field(() => Int)
  totalPages: number;
}
