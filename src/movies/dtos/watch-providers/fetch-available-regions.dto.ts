import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { FetchMoviesCoreInput } from '@/movies/dtos/fetch-movies-core.dto';
import { AvailableRegionResultCamelCase } from '@/movies/types/watch-providers/fetch-available-regions.type';

@InputType()
export class FetchAvailableRegionsInput extends FetchMoviesCoreInput {}

@ObjectType()
export class FetchAvailableRegionsOutput extends CoreOutput {
  @Field(() => [AvailableRegionResultCamelCase], { nullable: true })
  results?: AvailableRegionResultCamelCase[];
}
