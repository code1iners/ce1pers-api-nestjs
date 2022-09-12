import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movie-database/dtos/tv-shows/shared.dto';

@InputType()
export class FetchTvTranslationsInput extends PickType(CommonFetchTvInput, [
  'tvId',
] as const) {}

@ObjectType()
class ContentTranslationData {
  @Field(() => String)
  name: string;

  @Field(() => String)
  overview: string;

  @Field(() => String)
  homepage: string;

  @Field(() => String)
  tagline: string;
}

@ObjectType()
class ContentTranslation {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  iso6391: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  englishName: string;

  @Field(() => ContentTranslationData)
  data: ContentTranslationData;
}

@ObjectType()
export class FetchTvTranslationsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [ContentTranslation])
  translations: ContentTranslation[];
}

@ObjectType()
export class FetchTvTranslationsOutput extends CoreOutput {
  @Field(() => FetchTvTranslationsResponse, { nullable: true })
  data?: FetchTvTranslationsResponse;
}
