import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MediaContentResult {
  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => [Int])
  genreIds: number;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String, { nullable: true })
  originalName?: string;

  @Field(() => String, { nullable: true })
  originalTitle: string;

  @Field(() => String)
  overview: string;

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => String, { nullable: true })
  releaseDate: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => Boolean, { defaultValue: false })
  video: boolean;

  @Field(() => Int)
  voteCount: number;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Float)
  popularity: number;
}

@InputType()
export class FetchMoviesLanguageInput {
  @Field(() => String, {
    defaultValue: 'ko-kr',
    nullable: true,
    description:
      'Pass a ISO 639-1 value to display translated data for the fields that support it. (minLength: 2, pattern: ([a-z]{2})-([A-Z]{2}), default: en-US)',
  })
  language?: string;
}

@InputType()
export class CommonFetchMoviesInput extends FetchMoviesLanguageInput {
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
export class CommonFetchMoviesOutput {
  @Field(() => Int)
  page: number;

  @Field(() => [MediaContentResult])
  results: MediaContentResult[];

  @Field(() => Int)
  totalResults: number;

  @Field(() => Int)
  totalPages: number;
}

@ObjectType()
export class MovieDate {
  @Field(() => String)
  maximum: String;

  @Field(() => String)
  minimum: String;
}
