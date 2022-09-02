import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MediaContentResult {
  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  adult: boolean;

  @Field(() => String, { nullable: true })
  backdropPath?: string;

  @Field(() => [Int])
  genreIds: number;

  @Field(() => String)
  originalLanguage: string;

  @Field(() => String, { nullable: true })
  originalName?: string;

  @Field(() => String, { nullable: true })
  originalTitle: string;

  @Field(() => String)
  overview: string;

  @Field(() => String, { nullable: true })
  posterPath?: string;

  @Field(() => String, { nullable: true })
  releaseDate: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => Boolean, { defaultValue: false })
  video: boolean;

  @Field(() => Int)
  voteCount: number;

  @Field(() => Float)
  voteAverage: number;

  @Field(() => Float)
  popularity: number;
}
