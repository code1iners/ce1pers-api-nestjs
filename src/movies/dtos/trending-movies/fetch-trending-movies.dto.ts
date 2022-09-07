import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import { MovieMediaContentResult } from '@/movies/dtos/movie-contents/shared.dto';

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

  @Field(() => [MovieMediaContentResult])
  results: MovieMediaContentResult[];
}

@InputType()
export class FetchTrendingMoviesInput {
  @Field(() => TrendingMediaType)
  @IsEnum(TrendingMediaType)
  mediaType: TrendingMediaType;

  @Field(() => TrendingTimeWindow)
  @IsEnum(TrendingTimeWindow)
  timeWindow: TrendingTimeWindow;
}

@ObjectType()
export class FetchTrendingMoviesOutput extends CoreOutput {
  @Field(() => FetchTrendingResponse, { nullable: true })
  data?: FetchTrendingResponse;
}
