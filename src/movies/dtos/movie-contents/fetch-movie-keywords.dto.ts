import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class FetchMovieKeywordsInput {
  @Field(() => Int)
  movieId: number;
}

@ObjectType()
class MovieKeyword {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchMovieKeywordsResponse {
  @Field(() => Int)
  id: number;

  @Field(() => [MovieKeyword])
  keywords: MovieKeyword[];
}

@ObjectType()
export class FetchMovieKeywordsOutput extends CoreOutput {
  @Field(() => FetchMovieKeywordsResponse, { nullable: true })
  data?: FetchMovieKeywordsResponse;
}
