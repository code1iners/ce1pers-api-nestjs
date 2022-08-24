import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { GeocodingResponse } from '@/weathers/types/geocoding.type';

@InputType()
export class FetchGeocodingInput {
  @Field(() => String, {
    nullable: true,
    description: 'City name.',
  })
  cityName?: string;

  @Field(() => String, { nullable: true, description: 'Only for the US.' })
  stateCode?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Please use ISO 3166 country codes.',
  })
  countryCode?: string;

  @Field(() => Number, {
    nullable: true,
    description: 'Number of the locations in the API',
  })
  limit?: number;
}

@ObjectType()
export class FetchGeocodingOutput extends CoreOutput {
  @Field(() => [GeocodingResponse], { nullable: true })
  geocoding?: GeocodingResponse[];
}
