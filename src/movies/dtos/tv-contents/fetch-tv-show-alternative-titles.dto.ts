import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CommonFetchTvInput } from './shared.dto';

@InputType()
export class FetchTvShowAlternativeTitlesInput extends PickType(
  CommonFetchTvInput,
  ['tvId', 'language'] as const,
) {}

@ObjectType()
class TvShowAlternativeTitlesResult {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  type: string;
}

@ObjectType()
export class FetchTvShowAlternativeTitlesResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [TvShowAlternativeTitlesResult])
  results: TvShowAlternativeTitlesResult[];
}

@ObjectType()
export class FetchTvShowAlternativeTitlesOutput extends CoreOutput {
  @Field(() => FetchTvShowAlternativeTitlesResponse, { nullable: true })
  data?: FetchTvShowAlternativeTitlesResponse;
}
