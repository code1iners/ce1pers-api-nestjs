import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchWeatherInput,
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
} from '@/weathers/dtos/common-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';

@InputType()
export class FetchCurrentWeatherByCoordinatesInput extends CommonFetchWeatherCoordinatesInput {}

@InputType()
export class FetchCurrentWeatherByLocationInput extends CommonFetchLocationInput {}

@InputType()
export class FetchCurrentWeatherByCityId extends CommonFetchWeatherInput {
  @Field(() => Number, { description: 'City ID. List of city ID' })
  cityId: number;
}

@ObjectType()
export class FetchCurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherResponse, { nullable: true })
  current?: CurrentWeatherResponse;
}
