import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
} from '@/weathers/dtos/common-weather.dto';
import { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';

@InputType({
  description: 'Input which five days weather forecast by coordinates.',
})
export class FiveDayWeatherForecastInputByCoordinates extends CommonFetchWeatherCoordinatesInput {
  @Field(() => Number, {
    nullable: true,
    description:
      'A number of timestamps, which will be returned in the API response.',
  })
  count?: number;
}

@InputType({ description: 'Input which five days weather by locations' })
export class FetchFiveDayWeatherForecastByLocationInput extends CommonFetchLocationInput {}

@ObjectType({ description: 'Output which five days weather forecast.' })
export class FetchFiveDayWeatherForecastOutput extends CoreOutput {
  @Field(() => FiveDayWeatherForecastResponse)
  forecast?: FiveDayWeatherForecastResponse;
}
