import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum MediaContentType {
  Movie = 'MOVIE',
  Tv = 'TV',
}

registerEnumType(MediaContentType, { name: 'MediaContentType' });

export interface FetchContentProvidersResponse {
  results: ContentProvidersResult[];
}

@ObjectType({
  description: 'Movie providers result',
})
export class ContentProvidersResult {
  @Field(() => Int)
  display_priority: number;

  @Field(() => String)
  logo_path: string;

  @Field(() => String)
  provider_name: string;

  @Field(() => Int)
  provider_id: number;
}
