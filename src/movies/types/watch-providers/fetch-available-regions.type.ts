import { Field, ObjectType } from '@nestjs/graphql';

export interface FetchAvailableRegionResponse {
  results: AvailableRegionResultSnakeCase[];
}

@ObjectType({
  description: 'Available region result.',
})
export class AvailableRegionResultSnakeCase {
  @Field(() => String)
  iso_3166_1: string;

  @Field(() => String)
  english_name: string;

  @Field(() => String)
  native_name: string;
}

@ObjectType({ description: 'Available region results (Camel case).' })
export class AvailableRegionResultCamelCase {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  englishName: string;

  @Field(() => String)
  nativeName: string;
}
