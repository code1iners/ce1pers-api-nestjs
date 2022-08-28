import { FetchCurrentWeatherByCityId } from './dtos/fetch-current-weather.dto';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
  FetchCurrentWeatherByLocationInput,
  FetchCurrentWeatherByCoordinatesInput,
  FetchCurrentWeatherOutput,
} from '@/weathers/dtos/fetch-current-weather.dto';
import { AuthGuard } from '@/auth/auth.guard';
import { WeathersService } from '@/weathers/weathers.service';
import {
  FiveDayWeatherForecastInput,
  FiveDayWeatherForecastOutput,
} from '@/weathers/dtos/fetch-five-day-weather-forecast.dto';
import {
  FetchCurrentAirPollutionInput,
  FetchCurrentAirPollutionOutput,
} from '@/weathers/dtos/fetch-current-air-pollution.dto';
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
  FetchReverseGeocodingInput,
  FetchReverseGeocodingOutput,
} from '@/weathers/dtos/fetch-reverse-geocoding.dto';

@Resolver()
export class WeathersResolver {
  constructor(private readonly weatherService: WeathersService) {}

  @Query(() => FetchCurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeatherByCoordinates(
    @Args('input') input: FetchCurrentWeatherByCoordinatesInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByCoordinates(input);
  }

  @Query(() => FetchCurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeatherByLocation(
    @Args('input') input: FetchCurrentWeatherByLocationInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByLocation(input);
  }

  @Query(() => FetchCurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeatherByCityId(
    @Args('input') input: FetchCurrentWeatherByCityId,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByCityId(input);
  }

  @Query(() => FiveDayWeatherForecastOutput)
  @UseGuards(AuthGuard)
  async fiveDayWeatherForecast(
    @Args('input') input: FiveDayWeatherForecastInput,
  ): Promise<FiveDayWeatherForecastOutput> {
    return this.weatherService.fetchFiveDayWeatherForecast(input);
  }

  @Query(() => FetchCurrentAirPollutionOutput)
  @UseGuards(AuthGuard)
  async currentAirPollution(
    @Args('input') input: FetchCurrentAirPollutionInput,
  ): Promise<FetchCurrentAirPollutionOutput> {
    return this.weatherService.fetchCurrentAirPollution(input);
  }

  @Query(() => FetchForecastAirPollutionOutput)
  @UseGuards(AuthGuard)
  async forecastAirPollution(
    @Args('input') input: FetchForecastAirPollutionInput,
  ): Promise<FetchForecastAirPollutionOutput> {
    return this.weatherService.fetchForecastAirPollution(input);
  }

  @Query(() => FetchGeocodingByLocationOutput)
  @UseGuards(AuthGuard)
  async geocodingByLocation(
    @Args('input') input: FetchGeocodingByLocationInput,
  ): Promise<FetchGeocodingByLocationOutput> {
    return this.weatherService.fetchGeocodingByLocation(input);
  }

  @Query(() => FetchGeocodingByZipCodeOutput)
  @UseGuards(AuthGuard)
  async geocodingByZipCode(
    @Args('input') input: FetchGeocodingByZipCodeInput,
  ): Promise<FetchGeocodingByZipCodeOutput> {
    return this.weatherService.fetchGeocodingByZipCode(input);
  }

  @Query(() => FetchReverseGeocodingOutput)
  async reverseGeocoding(
    @Args('input') input: FetchReverseGeocodingInput,
  ): Promise<FetchReverseGeocodingOutput> {
    return this.weatherService.fetchReverseGeocoding(input);
  }
}
