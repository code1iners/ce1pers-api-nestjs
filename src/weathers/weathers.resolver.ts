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
  constructor(private readonly weathersService: WeathersService) {}

  @Query(() => FetchCurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeatherByCoordinates(
    @Args('input') input: FetchCurrentWeatherByCoordinatesInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weathersService.fetchCurrentWeatherByCoordinates(input);
  }

  @Query(() => FetchCurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeatherByLocation(
    @Args('input') input: FetchCurrentWeatherByLocationInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weathersService.fetchCurrentWeatherByLocation(input);
  }

  @Query(() => FiveDayWeatherForecastOutput)
  @UseGuards(AuthGuard)
  async fiveDayWeatherForecast(
    @Args('input') input: FiveDayWeatherForecastInput,
  ): Promise<FiveDayWeatherForecastOutput> {
    return this.weathersService.fetchFiveDayWeatherForecast(input);
  }

  @Query(() => FetchCurrentAirPollutionOutput)
  @UseGuards(AuthGuard)
  async currentAirPollution(
    @Args('input') input: FetchCurrentAirPollutionInput,
  ): Promise<FetchCurrentAirPollutionOutput> {
    return this.weathersService.fetchCurrentAirPollution(input);
  }

  @Query(() => FetchForecastAirPollutionOutput)
  @UseGuards(AuthGuard)
  async forecastAirPollution(
    @Args('input') input: FetchForecastAirPollutionInput,
  ): Promise<FetchForecastAirPollutionOutput> {
    return this.weathersService.fetchForecastAirPollution(input);
  }

  @Query(() => FetchGeocodingByLocationOutput)
  @UseGuards(AuthGuard)
  async geocodingByLocation(
    @Args('input') input: FetchGeocodingByLocationInput,
  ): Promise<FetchGeocodingByLocationOutput> {
    return this.weathersService.fetchGeocodingByLocation(input);
  }

  @Query(() => FetchGeocodingByZipCodeOutput)
  @UseGuards(AuthGuard)
  async geocodingByZipCode(
    @Args('input') input: FetchGeocodingByZipCodeInput,
  ): Promise<FetchGeocodingByZipCodeOutput> {
    return this.weathersService.fetchGeocodingByZipCode(input);
  }

  @Query(() => FetchReverseGeocodingOutput)
  async reverseGeocoding(
    @Args('input') input: FetchReverseGeocodingInput,
  ): Promise<FetchReverseGeocodingOutput> {
    return this.weathersService.fetchReverseGeocoding(input);
  }
}
