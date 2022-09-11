import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CommonFetchMoviesInput } from '@/movies/dtos/movie-contents/shared.dto';

@InputType()
export class CommonFetchTvListInput extends CommonFetchMoviesInput {}

@InputType()
export class CommonFetchTvInput {
  @Field(() => Int)
  tvId: number;

  @Field(() => String, { nullable: true, defaultValue: 'ko-kr' })
  language?: string;
}

@ObjectType()
export class TvLastEpisodeToAir {
  @Field(() => String)
  airDate: string;

  @Field(() => Int)
  episodeNumber: number;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  overview: string;

  @Field(() => String)
  productionCode: string;

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field(() => Int)
  seasonNumber: number;

  @Field(() => Int)
  showId: number;

  @Field(() => String, { nullable: true })
  stillPath?: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;
}

@ObjectType()
export class TvSeason {
  @Field(() => String)
  airDate: string;

  @Field(() => Int)
  episodeCount: number;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  overview: string;

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => Int)
  seasonNumber: number;
}

@ObjectType()
export class TvCreatedBy {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  creditId: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  gender: number;

  @Field(() => String, { nullable: true })
  profilePath?: string;
}

@ObjectType()
export class TvGenre {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class TvListResult {
  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => String)
  firstAirDate: string;

  @Field(() => [Int])
  genreIds: number[];

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [String])
  originCountry: string[];

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String)
  originalName: string;

  @Field(() => String)
  overview: string;

  @Field(() => Float)
  popularity: number;

  @Field(() => String)
  posterPath: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;
}

@ObjectType()
export class FetchTvListResponse {
  @Field(() => Int)
  page: number;

  @Field(() => [TvListResult])
  results: TvListResult[];

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  totalResults: number;
}
