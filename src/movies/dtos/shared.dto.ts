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

@ObjectType()
class FetchMovieDetailsGenre {
  @Field(() => String)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
class MovieSpokenLanguage {
  @Field(() => String)
  englishName: string;

  @Field(() => String)
  iso_639_1: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchMovieDetailsResponse {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => Int)
  budget: number;

  @Field(() => [FetchMovieDetailsGenre])
  genres: FetchMovieDetailsGenre[];

  @Field(() => String)
  homepage: string;

  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  imdbId?: string;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String)
  originalTitle: string;

  @Field(() => String)
  overview: string;

  @Field(() => Float)
  popularity: number;

  @Field(() => String, { nullable: true })
  posterPath: string;

  @Field(() => String)
  releaseDate: string;

  @Field(() => Int)
  revenue: number;

  @Field(() => Int)
  runtime: number;

  @Field(() => String)
  status: string;

  @Field(() => String)
  tagline: string;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  video: boolean;

  @Field(() => Float)
  voteAverage: 0.0;

  @Field(() => Int)
  voteCount: 0;

  @Field(() => [MovieSpokenLanguage])
  spokenLanguages: MovieSpokenLanguage[];

  //     @Field(() => String, {nullable:true})
  //   belongsToCollection: null;
  //   productionCompanies: [];
  //   productionCountries: [];
}
@ObjectType()
class AppendToResponseVideosResult {
  @Field(() => String)
  iso6391: string;

  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  key: string;

  @Field(() => String)
  site: string;

  @Field(() => Int)
  size: number;

  @Field(() => String)
  type: string;

  @Field(() => Boolean)
  official: boolean;

  @Field(() => String)
  publishedAt: string;

  @Field(() => String)
  id: string;
}
@ObjectType()
class AppendToResponseVideos {
  @Field(() => [AppendToResponseVideosResult])
  results: AppendToResponseVideosResult[];
}

@ObjectType()
class AppendToResponseImages {
  @Field(() => [String])
  backdrops: string[];

  @Field(() => [String])
  logos: string[];

  @Field(() => [String])
  posters: string[];
}

@ObjectType()
export class FetchMovieDetailsAppendToResponse extends FetchMovieDetailsResponse {
  @Field(() => AppendToResponseVideos, { nullable: true })
  videos: AppendToResponseVideos;
  @Field(() => AppendToResponseImages, { nullable: true })
  images: AppendToResponseImages;
}
