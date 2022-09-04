import { Field, InputType, ObjectType, Int, Float } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { FetchMoviesLanguageInput } from '@/movies/dtos/shared.dto';

@ObjectType()
class FetchLatestMovieGenre {
  @Field(() => String)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class FetchLatestMovieResponse {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => Int)
  budget: number;

  @Field(() => [FetchLatestMovieGenre])
  genres: FetchLatestMovieGenre[];

  @Field(() => String)
  homepage: string;

  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  imdbId?: string;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String)
  originalTitle: string;

  @Field(() => String)
  overview: string;

  @Field(() => Float)
  popularity: number;

  @Field(() => String, { nullable: true })
  posterPath: string;

  @Field(() => String)
  releaseDate: string;

  @Field(() => Int)
  revenue: number;

  @Field(() => Int)
  runtime: number;

  @Field(() => String)
  status: string;

  @Field(() => String)
  tagline: string;

  @Field(() => String)
  title: string;

  @Field(() => Boolean)
  video: boolean;

  @Field(() => Float)
  voteAverage: 0.0;

  @Field(() => Int)
  voteCount: 0;

  //     @Field(() => String, {nullable:true})
  //   belongsToCollection: null;
  //   productionCompanies: [];
  //   productionCountries: [];
  //   spokenLanguages: [];
}

@InputType()
export class FetchLatestMovieInput extends FetchMoviesLanguageInput {}

@ObjectType()
export class FetchLatestMovieOutput extends CoreOutput {
  @Field(() => FetchLatestMovieResponse, { nullable: true })
  data?: FetchLatestMovieResponse;
}
