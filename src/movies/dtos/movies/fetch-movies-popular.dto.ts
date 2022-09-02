import { CoreOutput } from '@/core/dtos/core.dto';
import { FetchMoviePopularResponse } from '@/movies/types/movies/fetch-movie-popular.type';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class FetchMoviePopularInput {
  @Field(() => String, {
    defaultValue: 'ko-kr',
    description:
      'Pass a ISO 639-1 value to display translated data for the fields that support it. (minLength: 2, pattern: ([a-z]{2})-([A-Z]{2}), default: en-US)',
  })
  language: string;

  @Field(() => Int, {
    defaultValue: 1,
    description:
      'Specify which page to query. (minimum: 1, maximum: 1000, default: 1)',
  })
  page: number;

  @Field(() => String, {
    defaultValue: 'KR',
    description:
      'Specify a ISO 3166-1 code to filter release dates. Must be uppercase. (pattern: ^[A-Z]{2}$)',
  })
  region: string;
}

@ObjectType()
export class FetchMoviePopularOutput extends CoreOutput {
  @Field(() => FetchMoviePopularResponse, { nullable: true })
  data?: FetchMoviePopularResponse;
}
