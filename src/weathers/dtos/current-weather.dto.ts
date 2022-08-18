import {
  Field,
  Float,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CurrentWeatherUnit,
  CurrentWeatherLanguage,
  CurrentWeatherData,
} from '@/weathers/types/current-weather-unit';

registerEnumType(CurrentWeatherUnit, { name: 'CurrentWeatherUnit' });
registerEnumType(CurrentWeatherLanguage, { name: 'CurrentWeatherLanguage' });

@InputType()
export class CurrentWeatherInput {
  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field(() => CurrentWeatherUnit)
  @IsEnum(CurrentWeatherUnit)
  units: CurrentWeatherUnit;

  @Field(() => CurrentWeatherLanguage)
  @IsEnum(CurrentWeatherLanguage)
  language: CurrentWeatherLanguage;
}

@ObjectType()
export class CurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherData)
  current?: CurrentWeatherData;
}
