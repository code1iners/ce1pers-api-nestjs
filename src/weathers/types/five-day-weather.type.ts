import { Field, ObjectType } from '@nestjs/graphql';
import {
  WeatherMain,
  WeatherData,
  WeatherClouds,
  WeatherWind,
  WeatherCoord,
} from '@/weathers/types/common-weather.type';
import { FiveDayWeatherForecastPartOfDay } from '@/weathers/types/common-enums.type';

@ObjectType()
class FiveDayWeatherForecastSys {
  @Field(() => FiveDayWeatherForecastPartOfDay)
  pod: FiveDayWeatherForecastPartOfDay;
}

@ObjectType()
export class FiveDayWeatherForecastCity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => WeatherCoord)
  coord: WeatherCoord;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  population: number;

  @Field(() => Number)
  timezone: number;

  @Field(() => Number)
  sunrise: number;

  @Field(() => Number)
  sunset: number;
}

@ObjectType()
export class FiveDayWeatherForecastData {
  @Field(() => Number)
  dt: number;

  @Field(() => WeatherMain)
  main: WeatherMain;

  @Field(() => [WeatherData])
  weather: WeatherData[];

  @Field(() => WeatherClouds)
  clouds: WeatherClouds;

  @Field(() => WeatherWind)
  wind: WeatherWind;

  @Field(() => Number)
  visibility: number;

  @Field(() => Number)
  pop: number;

  @Field(() => FiveDayWeatherForecastSys)
  sys: FiveDayWeatherForecastSys;

  @Field(() => String)
  dt_txt: string;
}

@ObjectType()
export class FiveDayWeatherForecastResponse {
  @Field(() => String)
  cod: string;

  @Field(() => Number)
  message: number;

  @Field(() => Number)
  cnt: number;

  @Field(() => [FiveDayWeatherForecastData])
  list: FiveDayWeatherForecastData[];

  @Field(() => FiveDayWeatherForecastCity)
  city: FiveDayWeatherForecastCity;
}
