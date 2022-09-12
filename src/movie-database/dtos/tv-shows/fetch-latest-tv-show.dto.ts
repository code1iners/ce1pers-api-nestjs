import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchTvListInput,
  FetchTvShowDetailsNetwork,
  FetchTvShowDetailsProductionCompany,
  FetchTvShowDetailsProductionCountry,
  FetchTvShowDetailsSpokenLanguage,
  TvCreatedBy,
  TvGenre,
  TvLastEpisodeToAir,
  TvSeason,
} from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchLatestTvShowInput extends PickType(CommonFetchTvListInput, [
  'language',
] as const) {}

@ObjectType()
export class FetchLatestTvShowResponse {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => [TvCreatedBy])
  createdBy: TvCreatedBy[];

  @Field(() => String)
  firstAirDate: string;

  @Field(() => [TvGenre])
  genres: TvGenre[];

  @Field(() => String)
  homepage: string;

  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  inProduction: boolean;

  @Field(() => String, { nullable: true })
  lastAirDate?: string;

  @Field(() => TvLastEpisodeToAir, { nullable: true })
  lastEpisodeToAir?: TvLastEpisodeToAir;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  nextEpisodeToAir?: string;

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

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => [TvSeason])
  seasons: TvSeason[];

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

  @Field(() => [FetchTvShowDetailsNetwork], { nullable: true })
  networks?: FetchTvShowDetailsNetwork[];

  @Field(() => [String], { nullable: true })
  languages?: string[];

  @Field(() => [FetchTvShowDetailsProductionCompany], { nullable: true })
  productionCompanies?: FetchTvShowDetailsProductionCompany[];

  @Field(() => [FetchTvShowDetailsProductionCountry], { nullable: true })
  productionCountries?: FetchTvShowDetailsProductionCountry[];

  @Field(() => [FetchTvShowDetailsSpokenLanguage], { nullable: true })
  spokenLanguages?: FetchTvShowDetailsSpokenLanguage[];

  @Field(() => [Int])
  episodeRunTime: number[];
}

@ObjectType()
export class FetchLatestTvShowOutput extends CoreOutput {
  @Field(() => FetchLatestTvShowResponse, { nullable: true })
  data?: FetchLatestTvShowResponse;
}
