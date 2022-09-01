import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { FetchMoviesCoreInput } from '@/movies/dtos/fetch-movies-core.dto';
import {
  MediaContentType,
  ContentProvidersResult,
} from '@/movies/types/watch-providers/fetch-content-providers.type';
import { IsEnum } from 'class-validator';

@InputType()
export class FetchContentProvidersInput extends FetchMoviesCoreInput {
  @Field(() => String, {
    defaultValue: 'kr',
    description:
      'Use the ISO-3166-1 code to filter the providers that are available in a particular country.',
    nullable: true,
  })
  watchRegion?: string;

  @Field(() => MediaContentType, {
    description: 'Media content type (Movie or Tv)',
  })
  @IsEnum(MediaContentType)
  mediaContentType: MediaContentType;
}

@ObjectType()
export class FetchContentProvidersOutput extends CoreOutput {
  @Field(() => [ContentProvidersResult], { nullable: true })
  results?: ContentProvidersResult[];
}
