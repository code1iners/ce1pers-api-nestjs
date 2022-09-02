import {
  Field,
  Float,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { MediaContentResult } from '@/movies/types';

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

  @Field(() => [MediaContentResult])
  results: MediaContentResult[];
}
