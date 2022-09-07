import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import {
  CommonFetchTvInput,
  TvCreatedBy,
  TvGenre,
  TvLastEpisodeToAir,
  TvSeason,
} from '@/movies/dtos/tv-contents/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@InputType()
export class FetchLatestTvInput extends PickType(CommonFetchTvInput, [
  'language',
] as const) {}

@ObjectType()
export class FetchLatestTvResponse {
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

  @Field(() => String)
  lastAirDate: string;

  @Field(() => TvLastEpisodeToAir)
  lastEpisodeToAir: TvLastEpisodeToAir;

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

  episodeRunTime: [];

  languages: [];

  networks: [];

  productionCompanies: [];

  productionCountries: [];

  spokenLanguages: [];
}

@ObjectType()
export class FetchLatestTvOutput extends CoreOutput {
  @Field(() => FetchLatestTvResponse, { nullable: true })
  data?: FetchLatestTvResponse;
}
