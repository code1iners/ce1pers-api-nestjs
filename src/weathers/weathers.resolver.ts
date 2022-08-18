import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
  CurrentWeatherInput,
  CurrentWeatherOutput,
} from '@/weathers/dtos/current-weather.dto';
import { AuthGuard } from '@/auth/auth.guard';
import { WeathersService } from '@/weathers/weathers.service';

@Resolver()
export class WeathersResolver {
  constructor(private readonly weathersService: WeathersService) {}

  @Query(() => CurrentWeatherOutput)
  @UseGuards(AuthGuard)
  async currentWeather(
    @Args('input') input: CurrentWeatherInput,
  ): Promise<CurrentWeatherOutput> {
    return this.weathersService.getCurrentWeather(input);
  }
}
