import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class GeocodingByLocationResponse {
  @Field(() => String)
  name: string;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field(() => String)
  country: string;

  @Field(() => String, { nullable: true })
  state?: string;
}

@ObjectType()
export class GeocodingByZipCodeResponse {
  @Field(() => String)
  zip: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  lat: number;

  @Field(() => Number)
  lon: number;

  @Field(() => String)
  country: string;
}

@ObjectType()
export class ReverseGeocodingResponse extends GeocodingByLocationResponse {}
