import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class FetchForecastAirPollutionInput extends CommonWeatherInput {}

@ObjectType()
export class FetchForecastAirPollutionOutput extends CoreOutput {
  @Field(() => CurrentAirPollutionResponse, { nullable: true })
  airPollution?: CurrentAirPollutionResponse;
}
