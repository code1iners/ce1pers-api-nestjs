import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CommonFetchMoviesInput } from '@/movies/dtos/movie-contents/shared.dto';

@InputType()
export class CommonFetchTvInput extends CommonFetchMoviesInput {}

@ObjectType()
export class TvLastEpisodeToAir {
  @Field(() => String)
  airDate: string;

  @Field(() => Int)
  episodeNumber: number;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  overview: string;

  @Field(() => String)
  productionCode: string;

  @Field(() => Int, { nullable: true })
  runtime?: number;

  @Field(() => Int)
  seasonNumber: number;

  @Field(() => Int)
  showId: number;

  @Field(() => String, { nullable: true })
  stillPath?: string;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Int)
  voteCount: number;
}

@ObjectType()
export class TvSeason {
  @Field(() => String)
  airDate: string;

  @Field(() => Int)
  episodeCount: number;

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  overview: string;

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => Int)
  seasonNumber: number;
}

@ObjectType()
export class TvCreatedBy {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  creditId: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  gender: number;

  @Field(() => String, { nullable: true })
  profilePath?: string;
}

@ObjectType()
export class TvGenre {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
