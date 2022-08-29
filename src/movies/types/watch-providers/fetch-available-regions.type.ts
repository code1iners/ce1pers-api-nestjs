import { Field, ObjectType } from '@nestjs/graphql';

export interface FetchAvailableRegionResponse {
  results: AvailableRegionResult[];
}

@ObjectType({
  description: 'Available region result.',
})
export class AvailableRegionResult {
  @Field(() => String)
  iso_3166_1: string;

  @Field(() => String)
  english_name: string;

  @Field(() => String)
  native_name: string;
}
