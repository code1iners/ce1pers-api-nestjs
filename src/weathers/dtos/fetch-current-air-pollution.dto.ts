import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchWeatherCoordinatesInput } from '@/weathers/dtos/common-weather.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';

@InputType()
export class FetchCurrentAirPollutionInput extends CommonFetchWeatherCoordinatesInput {}

@ObjectType()
export class FetchCurrentAirPollutionOutput extends CoreOutput {
  @Field(() => CurrentAirPollutionResponse, { nullable: true })
  airPollution?: CurrentAirPollutionResponse;
}
