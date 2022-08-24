import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { AirPollutionResponse } from '@/weathers/types/air-pollution.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class FetchAirPollutionInput extends CommonWeatherInput {}

@ObjectType()
export class FetchAirPollutionOutput extends CoreOutput {
  @Field(() => AirPollutionResponse, { nullable: true })
  airPollution?: AirPollutionResponse;
}
