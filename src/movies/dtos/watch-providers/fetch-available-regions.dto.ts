import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { AvailableRegionResult } from '@/movies/types/watch-providers/fetch-available-regions.type';

@InputType()
export class FetchAvailableRegionsInput {
  @Field(() => String, {
    defaultValue: 'ko-kr',
    nullable: true,
    description:
      'Pass a ISO 639-1 value to display translated data for the fields that support it.',
  })
  language: string;
}

@ObjectType()
export class FetchAvailableRegionsOutput extends CoreOutput {
  @Field(() => [AvailableRegionResult], { nullable: true })
  results?: AvailableRegionResult[];
}
