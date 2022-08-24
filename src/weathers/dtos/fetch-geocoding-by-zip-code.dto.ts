import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { GeocodingByZipCodeResponse } from '@/weathers/types/geocoding.type';

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
