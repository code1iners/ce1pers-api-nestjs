import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { ReverseGeocodingResponse } from '@/weathers/types/geocoding.type';
import { CommonWeatherInput } from '@/weathers/types/common-weather.type';

@InputType()
export class FetchReverseGeocodingInput extends CommonWeatherInput {
  @Field(() => Number, {
    nullable: true,
    description:
      'Number of the location names in the API response (several results can be returned in the API response)',
  })
  limit?: number;
}

@ObjectType()
export class FetchReverseGeocodingOutput extends CoreOutput {
  @Field(() => [ReverseGeocodingResponse], {
    nullable: true,
    description:
      'Reverse geocoding allows to get name of the location (city name or area name) by using geografical coordinates (lat, lon). The limit parameter in the API call allows you to cap how many location names you will see in the API response.',
  })
  geocoding?: ReverseGeocodingResponse[];
}
