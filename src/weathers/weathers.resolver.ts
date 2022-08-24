import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
  FetchCurrentWeatherInput,
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
  async currentWeather(
    @Args('input') input: FetchCurrentWeatherInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weathersService.fetchCurrentWeather(input);
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
  async fetchCurrentAirPollution(
    @Args('input') input: FetchCurrentAirPollutionInput,
  ): Promise<FetchCurrentAirPollutionOutput> {
    return this.weathersService.fetchCurrentAirPollution(input);
  }

  @Query(() => FetchGeocodingByLocationOutput)
  @UseGuards(AuthGuard)
  async fetchGeocodingByLocation(
    @Args('input') input: FetchGeocodingByLocationInput,
  ): Promise<FetchGeocodingByLocationOutput> {
    return this.weathersService.fetchGeocodingByLocation(input);
  }

  @Query(() => FetchGeocodingByZipCodeOutput)
  @UseGuards(AuthGuard)
  async fetchGeocodingByZipCode(
    @Args('input') input: FetchGeocodingByZipCodeInput,
  ): Promise<FetchGeocodingByZipCodeOutput> {
    return this.weathersService.fetchGeocodingByZipCode(input);
  }

  @Query(() => FetchReverseGeocodingOutput)
  async fetchReverseGeocoding(
    @Args('input') input: FetchReverseGeocodingInput,
  ): Promise<FetchReverseGeocodingOutput> {
    return this.weathersService.fetchReverseGeocoding(input);
  }
}
