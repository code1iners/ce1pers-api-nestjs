import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchLocationInput } from '@/weathers/dtos/common-weather.dto';
import { GeocodingByLocationResponse } from '@/weathers/types/geocoding.type';

@InputType()
export class FetchGeocodingByLocationInput extends CommonFetchLocationInput {
  @Field(() => Number, {
    nullable: true,
    description: 'Number of the locations in the API',
  })
  limit?: number;
}

@ObjectType()
export class FetchGeocodingByLocationOutput extends CoreOutput {
  @Field(() => [GeocodingByLocationResponse], { nullable: true })
  geocoding?: GeocodingByLocationResponse[];
}
