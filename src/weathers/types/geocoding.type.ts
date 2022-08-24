import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class GeocodingResponse {
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
