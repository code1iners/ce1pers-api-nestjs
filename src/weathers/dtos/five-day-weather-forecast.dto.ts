import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonWeatherUnit,
  CommonWeatherLanguage,
} from '@/weathers/types/common-enums.type';
import { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';

@InputType()
export class FiveDayWeatherForecastInput {
  @Field(() => Number)
  latitude: number;

  @Field(() => Number)
  longitude: number;

  @Field(() => CommonWeatherUnit, {
    nullable: true,
    defaultValue: CommonWeatherUnit.Metric,
    description: 'Units of measurement.',
  })
  units?: CommonWeatherUnit;

  @Field(() => Number, {
    nullable: true,
    description:
      'A number of timestamps, which will be returned in the API response.',
  })
  count?: number;

  @Field(() => CommonWeatherLanguage, {
    nullable: true,
    defaultValue: CommonWeatherLanguage.kr,
    description:
      'You can use this parameter to get the output in your language.',
  })
  @IsEnum(CommonWeatherLanguage)
  language?: CommonWeatherLanguage;
}

@ObjectType()
export class FiveDayWeatherForecastOutput extends CoreOutput {
  @Field(() => FiveDayWeatherForecastResponse)
  forecast?: FiveDayWeatherForecastResponse;
}
