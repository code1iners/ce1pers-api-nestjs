import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import {
  FetchCurrentWeatherInput,
  FetchCurrentWeatherOutput,
} from '@/weathers/dtos/fetch-current-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';
import {
  FiveDayWeatherForecastInput,
  FiveDayWeatherForecastOutput,
} from '@/weathers/dtos/fetch-five-day-weather-forecast.dto';
import {
  makeUrlWithQueryString,
  convertWeatherIcon,
} from '@/weathers/utils/weather-helper';
import type { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';
import {
  FetchAirPollutionInput,
  FetchAirPollutionOutput,
} from '@/weathers/dtos/fetch-air-pollution.dto';
import { AirPollutionResponse } from '@/weathers/types/air-pollution.type';
import {
  FetchGeocodingInput,
  FetchGeocodingOutput,
} from '@/weathers/dtos/fetch-geocoding.dto';
import { GeocodingResponse } from '@/weathers/types/geocoding.type';

@Injectable()
export class WeathersService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Getting current weather information.
   */
  async fetchCurrentWeather({
    latitude: lat,
    longitude: lon,
    units,
    language: lang,
  }: FetchCurrentWeatherInput): Promise<FetchCurrentWeatherOutput> {
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
      console.error('[fetchCurrentWeather]', error);
      return {
        ok: false,
        error,
      };
    }
  }

  /**
   * Getting 5 day each 3 hour weather forecast information.
   */
  async fetchFiveDayWeatherForecast({
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
      console.error('[fetchFiveDayWeatherForecast]', error);
      return {
        ok: false,
        error: 'Failed getting five day weather forecast information.',
      };
    }
  }

  /**
   * Fetch air pollution information.
   */
  async fetchAirPollution({
    latitude: lat,
    longitude: lon,
  }: FetchAirPollutionInput): Promise<FetchAirPollutionOutput> {
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
      console.error('[fetchAirPollution]', error);
      return {
        ok: false,
        error: 'Failed getting air pollution information.',
      };
    }
  }

  /**
   * Fetch geocoding information.
   */
  async fetchGeocoding({
    cityName,
    countryCode,
    stateCode,
    limit = 5,
  }: FetchGeocodingInput): Promise<FetchGeocodingOutput> {
    try {
      // Making q parameter.
      const q = [cityName, countryCode, stateCode]
        .filter((isExist) => !!isExist)
        .join(',');

      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/geo/1.0/direct',
        queries: {
          q,
          limit,
        },
      });

      // Fetch current weather.
      const geocoding = await got.get(url).json<GeocodingResponse[]>();
      if (!geocoding) throw new Error('Failed fetch geocoding.');

      return {
        ok: true,
        geocoding,
      };
    } catch (error) {
      console.error('[fetchGeocoding]', error);
      return {
        ok: false,
        error: 'Failed fetch geocoding information.',
      };
    }
  }
}
