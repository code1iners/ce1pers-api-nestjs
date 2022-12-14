import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import {
  makeUrlWithQueryString,
  convertWeatherIcon,
  makeQueryParameter,
  makeWeatherForecastRequest,
  convertWeatherForecastListIcons,
} from '@/weathers/utils/weathers-helper';
import type { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';
import {
  GeocodingByLocationResponse,
  GeocodingByZipCodeResponse,
  ReverseGeocodingResponse,
} from '@/weathers/types/geocoding.type';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';
import {
  FetchCurrentWeatherByLocationInput,
  FetchCurrentWeatherByCoordinatesInput,
  FetchCurrentWeatherByCityIdInput,
  FetchCurrentWeatherByZipCodeInput,
  FetchCurrentWeatherOutput,
} from '@/weathers/dtos/fetch-current-weather.dto';
import {
  FetchFiveDayWeatherForecastByLocationsInput,
  FiveDayWeatherForecastInputByCoordinatesInput,
  FetchFiveDayWeatherForecastByCityIdInput,
  FetchFiveDayWeatherForecastByZipCodeInput,
  FetchFiveDayWeatherForecastOutput,
} from '@/weathers/dtos/fetch-five-day-weather-forecast.dto';
import {
  FetchAirPollutionForecastInput,
  FetchCurrentAirPollutionInput,
  FetchAirPollutionOutput,
  FetchAirPollutionHistoricalInput,
} from '@/weathers/dtos/fetch-air-pollution.dto';
import {
  FetchGeocodingByLocationInput,
  FetchGeocodingByLocationOutput,
} from '@/weathers/dtos/fetch-geocoding-by-location.dto';
import {
  FetchGeocodingByZipCodeInput,
  FetchGeocodingByZipCodeOutput,
} from '@/weathers/dtos/fetch-geocoding-by-zip-code.dto';
import {
  FetchReverseGeocodingInput,
  FetchReverseGeocodingOutput,
} from '@/weathers/dtos/fetch-reverse-geocoding.dto';

@Injectable()
export class WeathersService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Fetch current weather information by coordinates.
   */
  async fetchCurrentWeatherByCoordinates({
    latitude: lat,
    longitude: lon,
    units,
    language: lang,
  }: FetchCurrentWeatherByCoordinatesInput): Promise<FetchCurrentWeatherOutput> {
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
        error: 'Failed fetching current weather by coordinates.',
      };
    }
  }

  /**
   * Fetch current weather information by location.
   */
  async fetchCurrentWeatherByLocation({
    cityName,
    countryCode,
    stateCode,
    units,
    language: lang,
  }: FetchCurrentWeatherByLocationInput): Promise<FetchCurrentWeatherOutput> {
    try {
      // Making query parameter.
      const q = makeQueryParameter([cityName, countryCode, stateCode]);

      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/weather',
        queries: { q, units, lang },
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
      console.error('[fetchCurrentWeatherByLocation]', error);
      return {
        ok: false,
        error: 'Failed fetching current weather by location.',
      };
    }
  }

  /**
   * Fetch current weather information by city id.
   */
  async fetchCurrentWeatherByCityId({
    cityId: id,
    units,
    language: lang,
  }: FetchCurrentWeatherByCityIdInput): Promise<FetchCurrentWeatherOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/weather',
        queries: { id, units, lang },
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
      console.error('[fetchCurrentWeatherByCityId]', error);
      return {
        ok: false,
        error: 'Failed fetching current weather by city id.',
      };
    }
  }

  /**
   * Fetch current weather information by zip code.
   */
  async fetchCurrentWeatherByZipCode({
    zipCode: zip,
    units,
    language: lang,
  }: FetchCurrentWeatherByZipCodeInput): Promise<FetchCurrentWeatherOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/weather',
        queries: { zip, units, lang },
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
      console.error('[fetchCurrentWeatherByZipCode]', error?.message);
      return {
        ok: false,
        error: 'Failed fetching current weather by zip code.',
      };
    }
  }

  /**
   * Fetch 5 day each 3 hour weather forecast information.
   */
  async fetchFiveDayWeatherForecastByCoordinates({
    latitude: lat,
    longitude: lon,
    count: cnt,
    units,
    language: lang,
  }: FiveDayWeatherForecastInputByCoordinatesInput): Promise<FetchFiveDayWeatherForecastOutput> {
    try {
      // Make request.
      const request = makeWeatherForecastRequest({
        path: '/data/2.5/forecast',
        configService: this.configService,
        query: { lat, lon, lang, units, cnt },
      });

      // Fetch.
      const forecast = await request.json<FiveDayWeatherForecastResponse>();
      if (!forecast) throw new Error('Failed fetch five day weather forecast.');

      // Weather icon & apply.
      forecast.list = convertWeatherForecastListIcons({ forecast });

      return {
        ok: true,
        forecast,
      };
    } catch (error) {
      console.error('[fetchFiveDayWeatherForecastByCoordinates]', error);
      return {
        ok: false,
        error:
          'Failed getting five day weather forecast information by coordinates.',
      };
    }
  }

  /**
   * Fetch 5 day each 3 hour weather forecast information by locations.
   */
  async fetchFiveDayWeatherForecastByLocations({
    cityName,
    countryCode,
    stateCode,
    language: lang,
    units,
  }: FetchFiveDayWeatherForecastByLocationsInput): Promise<FetchFiveDayWeatherForecastOutput> {
    try {
      // Make request.
      const request = makeWeatherForecastRequest({
        path: '/data/2.5/forecast',
        configService: this.configService,
        qList: [cityName, countryCode, stateCode],
        query: { lang, units },
      });

      // Fetch.
      const forecast = await request.json<FiveDayWeatherForecastResponse>();
      if (!forecast) throw new Error('Failed fetch five day weather forecast.');

      // Weather icon & apply.
      forecast.list = convertWeatherForecastListIcons({ forecast });

      return {
        ok: true,
        forecast,
      };
    } catch (error) {
      console.error('[fetchFiveDayWeatherForecastByLocations]', error);
      return {
        ok: false,
        error:
          'Failed getting five day weather forecast information by locations.',
      };
    }
  }

  /**
   * Fetch 5 day each 3 hour weather forecast information by city ID.
   */
  async fetchFiveDayWeatherForecastByCityId({
    cityId: id,
    language: lang,
    units,
  }: FetchFiveDayWeatherForecastByCityIdInput): Promise<FetchFiveDayWeatherForecastOutput> {
    try {
      // Make request.
      const request = makeWeatherForecastRequest({
        path: '/data/2.5/forecast',
        configService: this.configService,
        query: { id, lang, units },
      });

      // Fetch.
      const forecast = await request.json<FiveDayWeatherForecastResponse>();
      if (!forecast) throw new Error('Failed fetch five day weather forecast.');

      // Weather icon & apply.
      forecast.list = convertWeatherForecastListIcons({ forecast });

      return {
        ok: true,
        forecast,
      };
    } catch (error) {
      console.error('[fetchFiveDayWeatherForecastByCityId]', error);
      return {
        ok: false,
        error:
          'Failed getting five day weather forecast information by city ID.',
      };
    }
  }

  /**
   * Fetch 5 day each 3 hour weather forecast information by zip code.
   */
  async fetchFiveDayWeatherForecastByZipCode({
    zipCode,
    countryCode,
    cnt = 5,
    language: lang,
    units,
  }: FetchFiveDayWeatherForecastByZipCodeInput): Promise<FetchFiveDayWeatherForecastOutput> {
    try {
      // Make request.
      const request = makeWeatherForecastRequest({
        path: '/data/2.5/forecast',
        configService: this.configService,
        qList: [zipCode, countryCode],
        query: { cnt, lang, units },
      });

      // Fetch.
      const forecast = await request.json<FiveDayWeatherForecastResponse>();
      if (!forecast) throw new Error('Failed fetch five day weather forecast.');

      // Weather icon & apply.
      forecast.list = convertWeatherForecastListIcons({ forecast });

      return {
        ok: true,
        forecast,
      };
    } catch (error) {
      console.error('[fetchFiveDayWeatherForecastByZipCode]', error);
      return {
        ok: false,
        error:
          'Failed getting five day weather forecast information by zip code.',
      };
    }
  }

  /**
   * Fetch current air pollution information.
   */
  async fetchCurrentAirPollution({
    latitude: lat,
    longitude: lon,
  }: FetchCurrentAirPollutionInput): Promise<FetchAirPollutionOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/air_pollution',
        queries: { lat, lon },
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
  async fetchAirPollutionForecast({
    latitude: lat,
    longitude: lon,
  }: FetchAirPollutionForecastInput): Promise<FetchAirPollutionOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/air_pollution/forecast',
        queries: { lat, lon },
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
      console.error('[fetchAirPollutionForecast]', error);
      return {
        ok: false,
        error: 'Failed fetch air pollution forecast information.',
      };
    }
  }

  /**
   * Fetch air pollution historical information.
   */
  async fetchAirPollutionHistorical({
    latitude: lat,
    longitude: lon,
    start,
    end,
    units,
    language: lang,
  }: FetchAirPollutionHistoricalInput): Promise<FetchAirPollutionOutput> {
    try {
      // Make url.
      const url = makeUrlWithQueryString({
        configService: this.configService,
        path: '/data/2.5/air_pollution/history',
        queries: { lat, lon, start, end, units, lang },
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
      console.error('[fetchAirPollutionHistorical]', error);
      return {
        ok: false,
        error: 'Failed fetch air pollution historical information.',
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
