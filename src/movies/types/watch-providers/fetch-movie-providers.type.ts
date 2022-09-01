import { Field, Int, ObjectType } from '@nestjs/graphql';

export interface FetchMovieProvidersResponse {
  results: MovieProvidersResult[];
}

@ObjectType({
  description: 'Movie providers result',
})
export class MovieProvidersResult {
  @Field(() => Int)
  'display_priority': number;

  @Field(() => String)
  'logo_path': string;

  @Field(() => String)
  'provider_name': string;

  @Field(() => Int)
  'provider_id': number;
}
