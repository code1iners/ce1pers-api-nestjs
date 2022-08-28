import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
  FetchCurrentWeatherByLocationInput,
  FetchCurrentWeatherByCoordinatesInput,
  FetchCurrentWeatherByCityIdInput,
  FetchCurrentWeatherOutput,
  FetchCurrentWeatherByZipCodeInput,
} from '@/weathers/dtos/fetch-current-weather.dto';
import { AuthGuard } from '@/auth/auth.guard';
import { WeathersService } from '@/weathers/weathers.service';
import {
  FiveDayWeatherForecastInputByCoordinatesInput,
  FetchFiveDayWeatherForecastByLocationsInput,
  FetchFiveDayWeatherForecastOutput,
  FetchFiveDayWeatherForecastByCityIdInput,
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

  @Query(() => FetchCurrentWeatherOutput, {
    description: 'Getting current weather information by coordinates.',
  })
  @UseGuards(AuthGuard)
  async currentWeatherByCoordinates(
    @Args('input') input: FetchCurrentWeatherByCoordinatesInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByCoordinates(input);
  }

  @Query(() => FetchCurrentWeatherOutput, {
    description: 'Getting current weather information by locations.',
  })
  @UseGuards(AuthGuard)
  async currentWeatherByLocation(
    @Args('input') input: FetchCurrentWeatherByLocationInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByLocation(input);
  }

  @Query(() => FetchCurrentWeatherOutput, {
    description: 'Getting current weather information by city ID.',
  })
  @UseGuards(AuthGuard)
  async currentWeatherByCityId(
    @Args('input') input: FetchCurrentWeatherByCityIdInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByCityId(input);
  }

  @Query(() => FetchCurrentWeatherOutput, {
    description: 'Getting current weather information by zip code.',
  })
  @UseGuards(AuthGuard)
  async currentWeatherByZipCode(
    @Args('input') input: FetchCurrentWeatherByZipCodeInput,
  ): Promise<FetchCurrentWeatherOutput> {
    return this.weatherService.fetchCurrentWeatherByZipCode(input);
  }

  @Query(() => FetchFiveDayWeatherForecastOutput, {
    description:
      'Getting five days / three hours weather forecast information by coordinates.',
  })
  @UseGuards(AuthGuard)
  async fiveDayWeatherForecastByCoordinates(
    @Args('input') input: FiveDayWeatherForecastInputByCoordinatesInput,
  ): Promise<FetchFiveDayWeatherForecastOutput> {
    return this.weatherService.fetchFiveDayWeatherForecastByCoordinates(input);
  }

  @Query(() => FetchFiveDayWeatherForecastOutput, {
    description:
      'Getting five days / three hours weather forecast information by locations.',
  })
  async fiveDayWeatherForecastByLocations(
    @Args('input') input: FetchFiveDayWeatherForecastByLocationsInput,
  ): Promise<FetchFiveDayWeatherForecastOutput> {
    return this.weatherService.fetchFiveDayWeatherForecastByLocations(input);
  }

  @Query(() => FetchFiveDayWeatherForecastOutput, {
    description:
      'Getting five days / three hours weather forecast information by city ID.',
  })
  async fiveDayWeatherForecastByCityId(
    @Args('input') input: FetchFiveDayWeatherForecastByCityIdInput,
  ): Promise<FetchFiveDayWeatherForecastOutput> {
    return this.weatherService.fetchFiveDayWeatherForecastByCityId(input);
  }

  @Query(() => FetchCurrentAirPollutionOutput, {
    description: 'Getting current air pollution information.',
  })
  @UseGuards(AuthGuard)
  async currentAirPollution(
    @Args('input') input: FetchCurrentAirPollutionInput,
  ): Promise<FetchCurrentAirPollutionOutput> {
    return this.weatherService.fetchCurrentAirPollution(input);
  }

  @Query(() => FetchForecastAirPollutionOutput, {
    description: 'Getting forecast air pollution information.',
  })
  @UseGuards(AuthGuard)
  async forecastAirPollution(
    @Args('input') input: FetchForecastAirPollutionInput,
  ): Promise<FetchForecastAirPollutionOutput> {
    return this.weatherService.fetchForecastAirPollution(input);
  }

  @Query(() => FetchGeocodingByLocationOutput, {
    description: 'Getting geocoding information by locations.',
  })
  @UseGuards(AuthGuard)
  async geocodingByLocation(
    @Args('input') input: FetchGeocodingByLocationInput,
  ): Promise<FetchGeocodingByLocationOutput> {
    return this.weatherService.fetchGeocodingByLocation(input);
  }

  @Query(() => FetchGeocodingByZipCodeOutput, {
    description: 'Getting geocoding information by zip code.',
  })
  @UseGuards(AuthGuard)
  async geocodingByZipCode(
    @Args('input') input: FetchGeocodingByZipCodeInput,
  ): Promise<FetchGeocodingByZipCodeOutput> {
    return this.weatherService.fetchGeocodingByZipCode(input);
  }

  @Query(() => FetchReverseGeocodingOutput, {
    description: 'Getting reverse geocoding information by coordinates.',
  })
  async reverseGeocoding(
    @Args('input') input: FetchReverseGeocodingInput,
  ): Promise<FetchReverseGeocodingOutput> {
    return this.weatherService.fetchReverseGeocoding(input);
  }
}
