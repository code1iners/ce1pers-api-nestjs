import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchMoviesInput } from '@/movie-database/dtos/movie-contents/shared.dto';

@ObjectType({ description: 'Available region results (Camel case).' })
export class AvailableRegionResult {
  @Field(() => String)
  iso31661: string;

  @Field(() => String)
  englishName: string;

  @Field(() => String)
  nativeName: string;
}
@ObjectType()
export class FetchAvailableRegionResponse {
  @Field(() => [AvailableRegionResult])
  results: AvailableRegionResult[];
}

@InputType()
export class FetchAvailableRegionsInput extends PickType(
  CommonFetchMoviesInput,
  ['language'] as const,
) {}

@ObjectType()
export class FetchAvailableRegionsOutput extends CoreOutput {
  @Field(() => FetchAvailableRegionResponse, { nullable: true })
  data?: FetchAvailableRegionResponse;
}
