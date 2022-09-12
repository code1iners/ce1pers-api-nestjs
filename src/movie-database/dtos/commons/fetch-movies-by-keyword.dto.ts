import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  CommonFetchMovieInput,
  CommonFetchMoviesOutput,
} from '@/movie-database/dtos/movies/shared.dto';

@InputType()
export class FetchMoviesByKeywordInput extends PickType(CommonFetchMovieInput, [
  'language',
] as const) {
  @Field(() => Int)
  keywordId: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  includeAdult?: boolean;
}

@ObjectType()
export class FetchMoviesByKeywordResponse extends CommonFetchMoviesOutput {
  @Field(() => Int)
  id: number;
}

@ObjectType()
export class FetchMoviesByKeywordOutput extends CoreOutput {
  @Field(() => FetchMoviesByKeywordResponse, { nullable: true })
  data?: FetchMoviesByKeywordResponse;
}
