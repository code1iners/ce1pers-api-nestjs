import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { AirPollutionResponse } from '@/weathers/types/air-pollution.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class AirPollutionInput extends CommonWeatherInput {}

@ObjectType()
export class AirPollutionOutput extends CoreOutput {
  @Field(() => AirPollutionResponse, { nullable: true })
  airPollution?: AirPollutionResponse;
}
