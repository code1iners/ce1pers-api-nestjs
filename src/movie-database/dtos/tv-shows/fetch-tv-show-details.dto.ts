import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import { MovieDetailAppendToResponseType } from '@/movie-database/dtos/movies/fetch-movie-details.dto';
import {
  CommonFetchTvInput,
  FetchTvShowDetailsNetwork,
  FetchTvShowDetailsProductionCompany,
  FetchTvShowDetailsProductionCountry,
  FetchTvShowDetailsSpokenLanguage,
} from '@/movie-database/dtos/tv-shows/shared.dto';
import {
  AppendToResponseImages,
  AppendToResponseVideos,
} from '@/movie-database/dtos/movies/shared.dto';

@InputType()
export class FetchTvShowDetailsInput extends PickType(CommonFetchTvInput, [
  'tvId',
  'language',
] as const) {
  @Field(() => MovieDetailAppendToResponseType, { nullable: true })
  @IsEnum(MovieDetailAppendToResponseType)
  appendToResponse?: MovieDetailAppendToResponseType;
}

@ObjectType()
class FetchTvShowDetailsCreatedBy {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  creditId: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  gender: number;

  @Field(() => String)
  profilePath: string;
}

@ObjectType()
class FetchTvShowDetailsGenre {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
class FetchTvShowDetailsLastEpisodeToAir {
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

  @Field(() => Int)
  runtime: number;

  @Field(() => Int)
  seasonNumber: number;

  @Field(() => Int)
  showId: number;

  @Field(() => String)
  stillPath: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;
}

@ObjectType()
class FetchTvShowDetailsSeason {
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

  @Field(() => String)
  posterPath: string;

  @Field(() => Int)
  seasonNumber: number;
}

@ObjectType()
export class FetchTvShowDetailsResponse {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String)
  backdropPath: string;

  @Field(() => [FetchTvShowDetailsCreatedBy])
  createdBy: FetchTvShowDetailsCreatedBy[];

  @Field(() => [Int])
  episodeRunTime: number[];

  @Field(() => String)
  firstAirDate: string;

  @Field(() => [FetchTvShowDetailsGenre])
  genres: FetchTvShowDetailsGenre[];

  @Field(() => String)
  homepage: string;

  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  inProduction: boolean;

  @Field(() => [String])
  languages: string[];

  @Field(() => String)
  lastAirDate: string;

  @Field(() => FetchTvShowDetailsLastEpisodeToAir)
  lastEpisodeToAir: FetchTvShowDetailsLastEpisodeToAir;

  @Field(() => String)
  name: string;

  @Field(() => [FetchTvShowDetailsNetwork])
  networks: FetchTvShowDetailsNetwork[];

  @Field(() => Int)
  numberOfEpisodes: number;

  @Field(() => Int)
  numberOfSeasons: number;

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

  @Field(() => [FetchTvShowDetailsProductionCompany])
  productionCompanies: FetchTvShowDetailsProductionCompany[];

  @Field(() => [FetchTvShowDetailsProductionCountry])
  productionCountries: FetchTvShowDetailsProductionCountry[];

  @Field(() => [FetchTvShowDetailsSeason])
  seasons: FetchTvShowDetailsSeason[];

  @Field(() => [FetchTvShowDetailsSpokenLanguage])
  spokenLanguages: FetchTvShowDetailsSpokenLanguage[];

  @Field(() => String)
  status: string;

  @Field(() => String)
  tagline: string;

  @Field(() => String)
  type: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;

  // @Field(() => )
  // nextEpisodeToAir
}

@ObjectType()
export class FetchTvShowDetailsAppendToResponse extends FetchTvShowDetailsResponse {
  @Field(() => AppendToResponseVideos, { nullable: true })
  videos?: AppendToResponseVideos;
  @Field(() => AppendToResponseImages, { nullable: true })
  images?: AppendToResponseImages;
}

@ObjectType()
export class FetchTvShowDetailsOutput extends CoreOutput {
  @Field(() => FetchTvShowDetailsAppendToResponse, { nullable: true })
  data?: FetchTvShowDetailsAppendToResponse;
}
