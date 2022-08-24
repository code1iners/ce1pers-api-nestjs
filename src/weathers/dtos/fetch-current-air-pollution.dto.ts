import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class FetchCurrentAirPollutionInput extends CommonWeatherInput {}

@ObjectType()
export class FetchCurrentAirPollutionOutput extends CoreOutput {
  @Field(() => CurrentAirPollutionResponse, { nullable: true })
  airPollution?: CurrentAirPollutionResponse;
}
