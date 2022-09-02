import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  FetchTrendingResponse,
  TrendingMediaType,
  TrendingTimeWindow,
} from '@/movies/types/trendings/fetch-trending.type';

@InputType()
export class FetchTrendingInput {
  @Field(() => TrendingMediaType)
  @IsEnum(TrendingMediaType)
  mediaType: TrendingMediaType;

  @Field(() => TrendingTimeWindow)
  @IsEnum(TrendingTimeWindow)
  timeWindow: TrendingTimeWindow;
}

@ObjectType()
export class FetchTrendingOutput extends CoreOutput {
  @Field(() => FetchTrendingResponse, { nullable: true })
  trending?: FetchTrendingResponse;
}
