import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchWeatherCoordinatesInput } from '@/weathers/dtos/common-weather.dto';
import { CurrentAirPollutionResponse } from '@/weathers/types/air-pollution.type';

@InputType({
  description: 'Input which current air pollution by coordinates.',
})
export class FetchCurrentAirPollutionInput extends CommonFetchWeatherCoordinatesInput {}

@InputType({
  description: 'Input which air pollution forecast by coordinates.',
})
export class FetchAirPollutionForecastInput extends CommonFetchWeatherCoordinatesInput {}

@InputType({
  description:
    'Input which historical air pollution by coordinates with start & end.',
})
export class FetchAirPollutionHistoricalInput extends CommonFetchWeatherCoordinatesInput {
  @Field(() => Number, {
    description: 'Start date (unix time, UTC time zone), e.g. start=1606488670',
  })
  start: number;

  @Field(() => Number, {
    description: 'End date (unix time, UTC time zone), e.g. end=1606747870',
  })
  end: number;
}

@ObjectType({
  description: 'Output which air pollution forecast.',
})
export class FetchAirPollutionOutput extends CoreOutput {
  @Field(() => CurrentAirPollutionResponse, { nullable: true })
  airPollution?: CurrentAirPollutionResponse;
}
