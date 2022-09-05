import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMovieInput,
  CommonFetchMoviesOutput,
} from '@/movies/dtos/shared.dto';

@InputType()
export class FetchRecommendationMoviesInput extends OmitType(
  CommonFetchMovieInput,
  ['region'] as const,
) {}

@ObjectType()
export class FetchRecommendationMoviesOutput extends CoreOutput {
  @Field(() => CommonFetchMoviesOutput, { nullable: true })
  data?: CommonFetchMoviesOutput;
}
