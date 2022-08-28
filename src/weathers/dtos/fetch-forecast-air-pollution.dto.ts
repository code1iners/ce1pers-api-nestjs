import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchWeatherCoordinatesInput } from '@/weathers/dtos/common-weather.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';

@InputType()
export class FetchForecastAirPollutionInput extends CommonFetchWeatherCoordinatesInput {}

@ObjectType()
export class FetchForecastAirPollutionOutput extends CoreOutput {
  @Field(() => CurrentAirPollutionResponse, { nullable: true })
  airPollution?: CurrentAirPollutionResponse;
}
