import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { CoreOutput } from '@/core/dtos/core.dto';
import {
  FetchMovieDetailsAppendToResponse,
  FetchMoviesLanguageInput,
} from '@/movies/dtos/shared.dto';

enum MovieDetailAppendToResponseType {
  Videos = 'videos',
  Images = 'images',
  Both = 'videos,images',
}

registerEnumType(MovieDetailAppendToResponseType, {
  name: 'MovieDetailAppendToResponseType',
});

@InputType()
export class FetchMovieDetailsInput extends FetchMoviesLanguageInput {
  @Field(() => Int)
  movieId: number;

  @Field(() => MovieDetailAppendToResponseType, { nullable: true })
  @IsEnum(MovieDetailAppendToResponseType)
  appendToResponse?: MovieDetailAppendToResponseType;
}

@ObjectType()
export class FetchMovieDetailsOutput extends CoreOutput {
  @Field(() => FetchMovieDetailsAppendToResponse, { nullable: true })
  data?: FetchMovieDetailsAppendToResponse;
}
