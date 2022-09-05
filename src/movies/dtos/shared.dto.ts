import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  OmitType,
} from '@nestjs/graphql';

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
export class CommonFetchMoviesInput {
  @Field(() => String, {
    defaultValue: 'ko-kr',
    nullable: true,
    description:
      'Pass a ISO 639-1 value to display translated data for the fields that support it. (minLength: 2, pattern: ([a-z]{2})-([A-Z]{2}), default: en-US)',
  })
  language?: string;

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

@InputType()
export class CommonFetchMovieInput extends CommonFetchMoviesInput {
  @Field(() => Int)
  movieId: number;
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
export class AppendToResponseVideosResult {
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
export class AppendToResponseVideos {
  @Field(() => [AppendToResponseVideosResult])
  results: AppendToResponseVideosResult[];
}

@ObjectType()
export class MovieImage {
  @Field(() => Float)
  aspectRatio: number;

  @Field(() => Int)
  height: number;

  @Field(() => String, { nullable: true })
  iso6391?: string;

  @Field(() => String)
  filePath: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;

  @Field(() => Int)
  width: number;
}

@ObjectType()
class AppendToResponseImages {
  @Field(() => [MovieImage])
  backdrops: MovieImage[];

  @Field(() => [MovieImage])
  logos: MovieImage[];

  @Field(() => [MovieImage])
  posters: MovieImage[];
}

@ObjectType()
export class FetchMovieDetailsAppendToResponse extends FetchMovieDetailsResponse {
  @Field(() => AppendToResponseVideos, { nullable: true })
  videos: AppendToResponseVideos;
  @Field(() => AppendToResponseImages, { nullable: true })
  images: AppendToResponseImages;
}

@ObjectType()
export class CommonMovieCastAndCrew {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => Int)
  gender: number;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  knownForDepartment: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  originalName: string;

  @Field(() => Float)
  popularity: number;

  @Field(() => String, { nullable: true })
  profilePath?: string;

  @Field(() => String)
  creditId: string;
}

@ObjectType()
export class MovieCast extends CommonMovieCastAndCrew {
  @Field(() => Int)
  castId: number;

  @Field(() => String)
  character: string;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class MovieCrew extends CommonMovieCastAndCrew {
  @Field(() => String)
  department: string;

  @Field(() => String)
  job: string;
}
