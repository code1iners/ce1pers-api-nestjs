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
  FetchAirPollutionInput,
  FetchAirPollutionOutput,
} from '@/weathers/dtos/fetch-air-pollution.dto';
import {
  FetchGeocodingByLocationInput,
  FetchGeocodingByLocationOutput,
  FetchGeocodingByZipCodeInput,
  FetchGeocodingByZipCodeOutput,
} from '@/weathers/dtos/fetch-geocoding.dto';

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

  @Query(() => FetchAirPollutionOutput)
  @UseGuards(AuthGuard)
  async airPollution(
    @Args('input') input: FetchAirPollutionInput,
  ): Promise<FetchAirPollutionOutput> {
    return this.weathersService.fetchAirPollution(input);
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
}
