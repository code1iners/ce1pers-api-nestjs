import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  CommonFetchMoviesInput,
  CommonFetchMoviesOutput,
} from '@/movies/dtos/shared.dto';
import { CoreOutput } from '@/core/dtos/core.dto';

@ObjectType()
class NowPlayingMoviesDate {
  @Field(() => String)
  maximum: String;

  @Field(() => String)
  minimum: String;
}

@ObjectType()
export class FetchNowPlayingMoviesResponse extends CommonFetchMoviesOutput {
  @Field(() => NowPlayingMoviesDate)
  dates: NowPlayingMoviesDate;
}

@InputType()
export class FetchNowPlayingMoviesInput extends CommonFetchMoviesInput {}

@ObjectType()
export class FetchNowPlayingMoviesOutput extends CoreOutput {
  @Field(() => FetchNowPlayingMoviesResponse, { nullable: true })
  data?: FetchNowPlayingMoviesResponse;
}
