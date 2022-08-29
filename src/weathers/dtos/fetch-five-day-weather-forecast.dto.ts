import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
  CommonFetchWeatherInput,
} from '@/weathers/dtos/common-weather.dto';
import { FiveDayWeatherForecastResponse } from '@/weathers/types/five-day-weather.type';

@InputType({
  description: 'Input which five days weather forecast by coordinates.',
})
export class FiveDayWeatherForecastInputByCoordinatesInput extends CommonFetchWeatherCoordinatesInput {
  @Field(() => Number, {
    nullable: true,
    description:
      'A number of timestamps, which will be returned in the API response.',
  })
  count?: number;
}

@InputType({ description: 'Input which five days weather by locations.' })
export class FetchFiveDayWeatherForecastByLocationsInput extends CommonFetchLocationInput {}

@InputType({ description: 'Input which five days weather by city ID.' })
export class FetchFiveDayWeatherForecastByCityIdInput extends CommonFetchWeatherInput {
  @Field(() => Number, { description: 'City ID. List of city ID' })
  cityId: number;
}

@InputType({ description: 'Input which five days weather by zip code.' })
export class FetchFiveDayWeatherForecastByZipCodeInput extends CommonFetchWeatherInput {
  @Field(() => String, { description: 'Zip code.' })
  zipCode: string;

  @Field(() => String, { description: 'Country code of zip code.' })
  countryCode: string;

  @Field(() => Number, {
    nullable: true,
    description:
      'A number of timestamps, which will be returned in the API response.',
  })
  cnt: number;
}

@ObjectType({ description: 'Output which five days weather forecast.' })
export class FetchFiveDayWeatherForecastOutput extends CoreOutput {
  @Field(() => FiveDayWeatherForecastResponse, { nullable: true })
  forecast?: FiveDayWeatherForecastResponse;
}
