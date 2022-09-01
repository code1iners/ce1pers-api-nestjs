import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { FetchMoviesCoreInput } from '@/movies/dtos/fetch-movies-core.dto';
import { MovieProvidersResult } from '@/movies/types/watch-providers/fetch-movie-providers.type';

@InputType()
export class FetchMovieProvidersInput extends FetchMoviesCoreInput {
  @Field(() => String, {
    defaultValue: 'kr',
    description:
      'Use the ISO-3166-1 code to filter the providers that are available in a particular country.',
    nullable: true,
  })
  watch_region?: string;
}

@ObjectType()
export class FetchMovieProvidersOutput extends CoreOutput {
  @Field(() => [MovieProvidersResult], { nullable: true })
  results?: MovieProvidersResult[];
}
