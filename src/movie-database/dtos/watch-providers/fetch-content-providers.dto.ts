import {
  Field,
  InputType,
  Int,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchMoviesInput } from '@/movie-database/dtos/movies/shared.dto';

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

@InputType()
export class FetchContentProvidersInput extends PickType(
  CommonFetchMoviesInput,
  ['language'] as const,
) {
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
