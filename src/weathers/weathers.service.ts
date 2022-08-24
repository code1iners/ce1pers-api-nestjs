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
  makeQueryParameter,
} from '@/weathers/utils/weather-helper';
import type { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';
import {
  FetchCurrentAirPollutionInput,
  FetchCurrentAirPollutionOutput,
} from '@/weathers/dtos/fetch-current-air-pollution.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';

import {
  FetchForecastAirPollutionInput,
  FetchForecastAirPollutionOutput,
} from '@/weathers/dtos/fetch-forecast-air-pollution.dto';
import {
  FetchGeocodingByLocationInput,
  FetchGeocodingByLocationOutput,
} from '@/weathers/dtos/fetch-geocoding-by-location.dto';
import {
  FetchGeocodingByZipCodeInput,
  FetchGeocodingByZipCodeOutput,
} from '@/weathers/dtos/fetch-geocoding-by-zip-code.dto';
import {
  GeocodingByLocationResponse,
  GeocodingByZipCodeResponse,
  ReverseGeocodingResponse,
} from '@/weathers/types/geocoding.type';
import {
  FetchReverseGeocodingInput,
  FetchReverseGeocodingOutput,
} from '@/weathers/dtos/fetch-reverse-geocoding.dto';

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

      // Fetch.
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
   * Fetch current air pollution information.
   */
  async fetchCurrentAirPollution({
    latitude: lat,
    longitude: lon,
  }: FetchCurrentAirPollutionInput): Promise<FetchCurrentAirPollutionOutput> {
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

      // Fetch.
      const airPollution = await got
        .get(url)
        .json<CurrentAirPollutionResponse>();
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
   * Fetch forecast air pollution information.
   */
  async fetchForecastAirPollution({
    latitude: lat,
    longitude: lon,
  }: FetchForecastAirPollutionInput): Promise<FetchForecastAirPollutionOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/air_pollution/forecast',
        queries: {
          lat,
          lon,
        },
      });

      // Fetch.
      const airPollution = await got
        .get(url)
        .json<CurrentAirPollutionResponse>();
      if (!airPollution) throw new Error('Failed fetch air pollution.');

      return {
        ok: true,
        airPollution,
      };
    } catch (error) {
      console.error('[fetchForecastAirPollution]', error);
      return {
        ok: false,
        error: 'Failed fetch forecast air pollution information.',
      };
    }
  }

  /**
   * Fetch geocoding information by location.
   */
  async fetchGeocodingByLocation({
    cityName,
    countryCode,
    stateCode,
    limit = 5,
  }: FetchGeocodingByLocationInput): Promise<FetchGeocodingByLocationOutput> {
    try {
      // Making query parameter.
      const q = makeQueryParameter([cityName, countryCode, stateCode]);

      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/geo/1.0/direct',
        queries: {
          q,
          limit,
        },
      });

      // Fetch.
      const geocoding = await got
        .get(url)
        .json<GeocodingByLocationResponse[]>();
      if (!geocoding) throw new Error('Failed fetch geocoding by location.');

      return {
        ok: true,
        geocoding,
      };
    } catch (error) {
      console.error('[fetchGeocodingByLocation]', error);
      return {
        ok: false,
        error: 'Failed fetch geocoding by location information.',
      };
    }
  }

  /**
   * Fetch geocoding information by zip code.
   */
  async fetchGeocodingByZipCode({
    zipCode,
    countryCode,
  }: FetchGeocodingByZipCodeInput): Promise<FetchGeocodingByZipCodeOutput> {
    try {
      // Making query parameter.
      const zip = makeQueryParameter([zipCode, countryCode]);

      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/geo/1.0/zip',
        queries: {
          zip,
        },
      });

      // Fetch.
      const geocoding = await got.get(url).json<GeocodingByZipCodeResponse>();
      if (!geocoding) throw new Error('Failed fetch geocoding by zip code.');

      return {
        ok: true,
        geocoding,
      };
    } catch (error) {
      console.error('[fetchGeocodingByZipCode]', error);
      return {
        ok: false,
        error: 'Failed fetch geocoding information by zip code.',
      };
    }
  }

  /**
   * Fetch reverse geocoding information.
   */
  async fetchReverseGeocoding({
    latitude: lat,
    longitude: lon,
    limit = 5,
  }: FetchReverseGeocodingInput): Promise<FetchReverseGeocodingOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/geo/1.0/reverse',
        queries: { lat, lon, limit },
      });

      // Fetch.
      const geocoding = await got.get(url).json<ReverseGeocodingResponse[]>();
      if (!geocoding) throw new Error('Failed fetch reverse geocoding.');

      return {
        ok: true,
        geocoding,
      };
    } catch (error) {
      console.error('[fetchReverseGeocoding]', error);
      return {
        ok: false,
        error: 'Failed fetch reverse geocoding information.',
      };
    }
  }
}
