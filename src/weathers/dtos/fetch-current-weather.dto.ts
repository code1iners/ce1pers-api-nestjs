import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
} from '@/weathers/dtos/common-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';

@InputType()
export class FetchCurrentWeatherByCoordinatesInput extends CommonFetchWeatherCoordinatesInput {}

@ObjectType()
export class FetchCurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherResponse, { nullable: true })
  current?: CurrentWeatherResponse;
}

@InputType()
export class FetchCurrentWeatherByLocationInput extends CommonFetchLocationInput {}
