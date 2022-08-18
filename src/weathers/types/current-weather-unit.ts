import { Field, Float, ObjectType } from '@nestjs/graphql';

export enum CurrentWeatherUnit {
  Metric = 'Metric',
  Standard = 'Standard',
  Imperial = 'Imperial',
}

export enum CurrentWeatherLanguage {
  af = 'af',
  al = 'al',
  ar = 'ar',
  az = 'az',
  bg = 'bg',
  ca = 'ca',
  cz = 'cz',
  da = 'da',
  de = 'de',
  el = 'el',
  en = 'en',
  eu = 'eu',
  fa = 'fa',
  fi = 'fi',
  fr = 'fr',
  gl = 'gl',
  he = 'he',
  hi = 'hi',
  hr = 'hr',
  hu = 'hu',
  id = 'id',
  it = 'it',
  ja = 'ja',
  kr = 'kr',
  la = 'la',
  lt = 'lt',
  mk = 'mk',
  no = 'no',
  nl = 'nl',
  pl = 'pl',
  pt = 'pt',
  pt_br = 'pt_br',
  ro = 'ro',
  ru = 'ru',
  sv = 'sv',
  se = 'se',
  sk = 'sk',
  sl = 'sl',
  sp = 'sp',
  es = 'es',
  sr = 'sr',
  th = 'th',
  tr = 'tr',
  ua = 'ua',
  uk = 'uk',
  vi = 'vi',
  zh_cn = 'zh_cn',
  zh_tw = 'zh_tw',
  zu = 'zu',
}

@ObjectType()
export class WeatherCoord {
  @Field(() => Float)
  lon: number;
  @Field(() => Float)
  lat: number;
}

@ObjectType()
export class Weather {
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
export class WeatherClouds {
  @Field(() => Number)
  all: number;
}

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
export class CurrentWeatherData {
  @Field(() => WeatherCoord)
  coord: WeatherCoord;

  @Field(() => [Weather])
  weather: Weather[];

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
