import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import * as qs from 'query-string';
import {
  CurrentWeatherInput,
  CurrentWeatherOutput,
} from '@/weathers/dtos/current-weather.dto';
import { CurrentWeatherData } from './types/current-weather-unit';

@Injectable()
export class WeathersService {
  constructor(private readonly configService: ConfigService) {}

  async getCurrentWeather({
    latitude,
    longitude,
    units,
    language,
  }: CurrentWeatherInput): Promise<CurrentWeatherOutput> {
    const origin = this.configService.get('OPEN_WEATHER_ORIGIN');
    const appId = this.configService.get('OPEN_WEATHER_KEY');
    const path = '/data/2.5/weather';
    const url = qs.stringifyUrl({
      url: `${origin}${path}`,
      query: {
        lat: latitude,
        lon: longitude,
        units,
        lang: language,
        appid: appId,
      },
    });
    try {
      // Fetch current weather.
      const current = await got.get(url).json<CurrentWeatherData>();
      if (!current) throw new Error('Failed fetch current weather.');

      // Fetch weather icon & apply.
      current.weather = current.weather.map((weather) => ({
        ...weather,
        icon: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`,
      }));

      return {
        ok: true,
        current,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
