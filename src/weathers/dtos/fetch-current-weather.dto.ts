import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchWeatherInput,
  CommonFetchLocationInput,
  CommonFetchWeatherCoordinatesInput,
} from '@/weathers/dtos/common-weather.dto';
import { CurrentWeatherResponse } from '@/weathers/types/current-weather.type';

@InputType({
  description: 'Inputs which fetch current weather by coordinates.',
})
export class FetchCurrentWeatherByCoordinatesInput extends CommonFetchWeatherCoordinatesInput {}

@InputType({ description: 'Input which fetch current weather by locations.' })
export class FetchCurrentWeatherByLocationInput extends CommonFetchLocationInput {}

@InputType({ description: 'Input which fetch current weather by city ID.' })
export class FetchCurrentWeatherByCityIdInput extends CommonFetchWeatherInput {
  @Field(() => Number, { description: 'City ID. List of city ID' })
  cityId: number;
}

@InputType({ description: 'Input which fetch current weather by zip code.' })
export class FetchCurrentWeatherByZipCodeInput extends CommonFetchWeatherInput {
  @Field(() => String, { description: 'Zip code' })
  zipCode: string;
}

@ObjectType({ description: 'Output which fetch current weather.' })
export class FetchCurrentWeatherOutput extends CoreOutput {
  @Field(() => CurrentWeatherResponse, { nullable: true })
  current?: CurrentWeatherResponse;
}
