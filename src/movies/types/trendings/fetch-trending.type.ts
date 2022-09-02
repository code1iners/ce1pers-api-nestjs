import {
  Field,
  Float,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum TrendingMediaType {
  All = 'ALL',
  Movie = 'MOVIE',
  Tv = 'TV',
  Person = 'PERSON',
}

export enum TrendingTimeWindow {
  Day = 'DAY',
  Week = 'WEEK',
}

registerEnumType(TrendingMediaType, { name: 'TrendingMediaType' });
registerEnumType(TrendingTimeWindow, { name: 'TrendingTimeWindow' });

@ObjectType()
export class FetchTrendingResponse {
  @Field(() => Int)
  page: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  totalResults: number;

  @Field(() => [FetchTrendingResult])
  results: FetchTrendingResult[];
}

@ObjectType()
export class FetchTrendingResult {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => [Int])
  genreIds: number[];

  @Field(() => Int)
  id: number;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String, { nullable: true })
  originalName?: string;

  @Field(() => String, { nullable: true })
  originalTitle?: string;

  @Field(() => String)
  overview: string;

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => String, { nullable: true })
  releaseDate?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean, { defaultValue: false })
  video: boolean;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;

  @Field(() => Float)
  popularity: number;
}
