import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchWeatherInput,
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
} from '@/weathers/dtos/common-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';

@InputType({ description: 'Fetch current weather by coordinates.' })
export class FetchCurrentWeatherByCoordinatesInput extends CommonFetchWeatherCoordinatesInput {}

@InputType({ description: 'Fetch current weather by locations.' })
export class FetchCurrentWeatherByLocationInput extends CommonFetchLocationInput {}

@InputType({ description: 'Fetch current weather by city ID.' })
export class FetchCurrentWeatherByCityIdInput extends CommonFetchWeatherInput {
  @Field(() => Number, { description: 'City ID. List of city ID' })
  cityId: number;
}

@InputType({ description: 'Fetch current weather by zip code.' })
export class FetchCurrentWeatherByZipCodeInput extends CommonFetchWeatherInput {
  @Field(() => String, { description: 'Zip code' })
  zipCode: string;
}

@ObjectType({ description: 'Fetch current weather output.' })
export class FetchCurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherResponse, { nullable: true })
  current?: CurrentWeatherResponse;
}
