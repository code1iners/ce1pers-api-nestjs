import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  GeocodingByLocationResponse,
  GeocodingByZipCodeResponse,
} from '@/weathers/types/geocoding.type';

@InputType()
export class FetchGeocodingByLocationInput {
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
export class FetchGeocodingByLocationOutput extends CoreOutput {
  @Field(() => [GeocodingByLocationResponse], { nullable: true })
  geocoding?: GeocodingByLocationResponse[];
}

@InputType()
export class FetchGeocodingByZipCodeInput {
  @Field(() => String, { nullable: true })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  countryCode?: string;
}

@ObjectType()
export class FetchGeocodingByZipCodeOutput extends CoreOutput {
  @Field(() => GeocodingByZipCodeResponse, { nullable: true })
  geocoding?: GeocodingByZipCodeResponse;
}
