import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonWeatherUnit,
  CommonWeatherLanguage,
} from '@/weathers/types/common-enums.type';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class FetchCurrentWeatherInput extends CommonWeatherInput {
  @Field(() => CommonWeatherUnit, {
    nullable: true,
    defaultValue: CommonWeatherUnit.Metric,
    description: 'Units of measurement.',
  })
  @IsEnum(CommonWeatherUnit)
  units?: CommonWeatherUnit;

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
export class FetchCurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherResponse, { nullable: true })
  current?: CurrentWeatherResponse;
}
