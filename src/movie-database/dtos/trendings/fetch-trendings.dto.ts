import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import { MovieMediaContentResult } from '@/movie-database/dtos/movies/shared.dto';

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
export class FetchTrendingsResponse {
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
export class FetchTrendingsInput {
  @Field(() => TrendingMediaType)
  @IsEnum(TrendingMediaType)
  mediaType: TrendingMediaType;

  @Field(() => TrendingTimeWindow)
  @IsEnum(TrendingTimeWindow)
  timeWindow: TrendingTimeWindow;
}

@ObjectType()
export class FetchTrendingsOutput extends CoreOutput {
  @Field(() => FetchTrendingsResponse, { nullable: true })
  data?: FetchTrendingsResponse;
}
