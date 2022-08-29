import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@/auth/auth.guard';
import { WeathersService } from '@/weathers/weathers.service';
import {
  FetchCurrentWeatherByLocationInput,
  FetchCurrentWeatherByCoordinatesInput,
  FetchCurrentWeatherByCityIdInput,
  FetchCurrentWeatherByZipCodeInput,
  FetchCurrentWeatherOutput,
} from '@/weathers/dtos/fetch-current-weather.dto';
import {
  FiveDayWeatherForecastInputByCoordinatesInput,
  FetchFiveDayWeatherForecastByLocationsInput,
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

  @Query(() => FetchFiveDayWeatherForecastOutput, {
    description:
      'Getting five days / three hours weather forecast information by zip code.',
  })
  async fiveDayWeatherForecastByZipCode(
    @Args('input') input: FetchFiveDayWeatherForecastByZipCodeInput,
  ): Promise<FetchFiveDayWeatherForecastOutput> {
    return this.weatherService.fetchFiveDayWeatherForecastByZipCode(input);
  }

  @Query(() => FetchAirPollutionOutput, {
    description: 'Getting current air pollution information.',
  })
  @UseGuards(AuthGuard)
  async airPollutionCurrent(
    @Args('input') input: FetchCurrentAirPollutionInput,
  ): Promise<FetchAirPollutionOutput> {
    return this.weatherService.fetchCurrentAirPollution(input);
  }

  @Query(() => FetchAirPollutionOutput, {
    description: 'Getting forecast air pollution information.',
  })
  @UseGuards(AuthGuard)
  async airPollutionForecast(
    @Args('input') input: FetchAirPollutionForecastInput,
  ): Promise<FetchAirPollutionOutput> {
    return this.weatherService.fetchAirPollutionForecast(input);
  }

  @Query(() => FetchAirPollutionOutput, {
    description: 'Getting forecast air pollution information.',
  })
  @UseGuards(AuthGuard)
  async airPollutionHistorical(
    @Args('input') input: FetchAirPollutionHistoricalInput,
  ): Promise<FetchAirPollutionOutput> {
    return this.weatherService.fetchAirPollutionHistorical(input);
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
