import { InputType, Field, Float } from '@nestjs/graphql';
import {
  CommonWeatherLanguage,
  CommonWeatherUnit,
} from '@/weathers/types/common-enums.type';
import { IsEnum } from 'class-validator';

@InputType()
export class CommonFetchWeatherInput {
  @Field(() => CommonWeatherUnit, {
    nullable: true,
    defaultValue: CommonWeatherUnit.Metric,
    description: 'Units of measurement.',
  })
  @IsEnum(CommonWeatherUnit)
  units?: CommonWeatherUnit;

  @Field(() => CommonWeatherLanguage, {
    nullable: true,
    defaultValue: CommonWeatherLanguage.Korean,
    description:
      'You can use this parameter to get the output in your language.',
  })
  @IsEnum(CommonWeatherLanguage)
  language?: CommonWeatherLanguage;
}

@InputType()
export class CommonFetchLocationInput extends CommonFetchWeatherInput {
  @Field(() => String, {
    nullable: true,
    description: 'City name.',
  })
  cityName?: string;

  @Field(() => String, { nullable: true, description: 'Only for the US.' })
  stateCode?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Please use ISO 3166 country codes.',
  })
  countryCode?: string;
}

@InputType()
export class CommonFetchWeatherCoordinatesInput extends CommonFetchWeatherInput {
  @Field(() => Float, { description: 'Geographical coordinates latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Geographical coordinates longitude' })
  longitude: number;
}
