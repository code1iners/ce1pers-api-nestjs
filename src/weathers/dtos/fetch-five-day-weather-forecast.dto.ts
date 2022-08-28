import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchWeatherCoordinatesInput } from '@/weathers/dtos/common-weather.dto';
import { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';

@InputType()
export class FiveDayWeatherForecastInput extends CommonFetchWeatherCoordinatesInput {
  @Field(() => Number, {
    nullable: true,
    description:
      'A number of timestamps, which will be returned in the API response.',
  })
  count?: number;
}

@ObjectType()
export class FiveDayWeatherForecastOutput extends CoreOutput {
  @Field(() => FiveDayWeatherForecastResponse)
  forecast?: FiveDayWeatherForecastResponse;
}
