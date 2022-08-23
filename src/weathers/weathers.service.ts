import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import {
  CurrentWeatherInput,
  CurrentWeatherOutput,
} from '@/weathers/dtos/current-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';
import {
  FiveDayWeatherForecastInput,
  FiveDayWeatherForecastOutput,
} from '@/weathers/dtos/five-day-weather-forecast.dto';
import {
  makeUrlWithQueryString,
  convertWeatherIcon,
} from '@/weathers/utils/weather-helper';
import type { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';
import {
  AirPollutionInput,
  AirPollutionOutput,
} from '@/weathers/dtos/air-pollution.dto';
import { AirPollutionResponse } from '@/weathers/types/air-pollution.type';

@Injectable()
export class WeathersService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Getting current weather information.
   */
  async getCurrentWeather({
    latitude: lat,
    longitude: lon,
    units,
    language: lang,
  }: CurrentWeatherInput): Promise<CurrentWeatherOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/weather',
        queries: { lat, lon, lang, units },
      });

      // Fetch current weather.
      const current = await got.get(url).json<CurrentWeatherResponse>();
      if (!current) throw new Error('Failed fetch current weather.');

      // Weather icon & apply.
      current.weather = current.weather.map((weather) => ({
        ...weather,
        icon: convertWeatherIcon(weather.icon),
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

  /**
   * Getting 5day/3hour weather forecast information.
   */
  async getFiveDayWeatherForecast({
    latitude: lat,
    longitude: lon,
    count: cnt,
    units,
    language: lang,
  }: FiveDayWeatherForecastInput): Promise<FiveDayWeatherForecastOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/forecast',
        queries: {
          lat,
          lon,
          lang,
          units,
          cnt,
        },
      });

      // Fetch current weather.
      const forecast = await got
        .get(url)
        .json<FiveDayWeatherForecastResponse>();
      if (!forecast) throw new Error('Failed fetch five day weather forecast.');

      // Weather icon & apply.
      forecast.list = forecast.list.map((item) => {
        // Convert weather as icon url.
        const weather = item.weather.map((w) => ({
          ...w,
          icon: convertWeatherIcon(w.icon),
        }));

        return {
          ...item,
          weather,
        };
      });

      return {
        ok: true,
        forecast,
      };
    } catch (error) {
      console.error('[getFiveDayWeatherForecast]', error);
      return {
        ok: false,
        error: 'Failed getting five day weather forecast information.',
      };
    }
  }

  async getAirPollution({
    latitude: lat,
    longitude: lon,
  }: AirPollutionInput): Promise<AirPollutionOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/air_pollution',
        queries: {
          lat,
          lon,
        },
      });

      // Fetch current weather.
      const airPollution = await got.get(url).json<AirPollutionResponse>();
      if (!airPollution) throw new Error('Failed fetch air pollution.');

      return {
        ok: true,
        airPollution,
      };
    } catch (error) {
      console.error('[getAirPollution]', error);
      return {
        ok: false,
        error: 'Failed getting air pollution information.',
      };
    }
  }
}
