import {
  Field,
  Float,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  CommonWeatherUnit,
  CommonWeatherLanguage,
  FiveDayWeatherForecastPartOfDay,
} from '@/weathers/types/common-enums.type';

registerEnumType(CommonWeatherUnit, { name: 'CommonWeatherUnit' });
registerEnumType(CommonWeatherLanguage, { name: 'CommonWeatherLanguage' });
registerEnumType(FiveDayWeatherForecastPartOfDay, {
  name: 'FiveDayWeatherForecastPartOfDay',
});

@InputType()
export class CommonWeatherInput {
  @Field(() => Float, { description: 'Geographical coordinates latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Geographical coordinates longitude' })
  longitude: number;
}

@ObjectType()
export class WeatherMain {
  @Field(() => Float)
  temp: number;

  @Field(() => Float)
  feels_like: number;

  @Field(() => Float)
  temp_min: number;

  @Field(() => Float)
  temp_max: number;

  @Field(() => Number)
  pressure: number;

  @Field(() => Number)
  humidity: number;

  @Field(() => Number, { nullable: true })
  sea_level?: number;

  @Field(() => Number, { nullable: true })
  grnd_level?: number;

  @Field(() => Float, { nullable: true })
  temp_kf?: number;
}

@ObjectType()
export class WeatherData {
  @Field(() => String)
  id: number;

  @Field(() => String)
  main: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  icon: string;
}

@ObjectType()
export class WeatherClouds {
  @Field(() => Number)
  all: number;
}

@ObjectType()
export class WeatherWind {
  @Field(() => Float)
  speed: number;

  @Field(() => Number)
  deg: number;

  @Field(() => Float, { nullable: true })
  gust?: number;
}

@ObjectType()
export class WeatherCoord {
  @Field(() => Float)
  lon: number;
  @Field(() => Float)
  lat: number;
}
