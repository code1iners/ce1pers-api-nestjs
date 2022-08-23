import { Field, ObjectType } from '@nestjs/graphql';
import {
  WeatherMain,
  WeatherData,
  WeatherClouds,
  WeatherWind,
  WeatherCoord,
} from '@/weathers/types/common-weather.type';

@ObjectType()
export class WeatherSys {
  @Field(() => Number)
  type: number;

  @Field(() => Number)
  id: number;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  sunrise: number;

  @Field(() => Number)
  sunset: number;
}

@ObjectType()
export class CurrentWeatherResponse {
  @Field(() => WeatherCoord)
  coord: WeatherCoord;

  @Field(() => [WeatherData])
  weather: WeatherData[];

  @Field(() => String)
  base: string;

  @Field(() => WeatherMain)
  main: WeatherMain;

  @Field(() => Number)
  visibility: number;

  @Field(() => WeatherWind)
  wind: WeatherWind;

  @Field(() => WeatherClouds)
  clouds: WeatherClouds;

  @Field(() => Number)
  dt: number;

  @Field(() => WeatherSys)
  sys: WeatherSys;

  @Field(() => Number)
  timezone: number;

  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  cod: number;
}
