import { Args, Query, Resolver } from '@nestjs/graphql';
import { MovieDatabaseCommonService } from '@/movie-database/services/common.service';
import {
  GetImageUrlInput,
  GetImageUrlOutput,
} from '@/movie-database/dtos/commons/get-image-url.dto';
import {
  FetchMoviesByKeywordInput,
  FetchMoviesByKeywordOutput,
} from '../dtos/commons/fetch-movies-by-keyword.dto';

@Resolver()
export class MovieDatabaseCommonResolver {
  constructor(private readonly commonService: MovieDatabaseCommonService) {}

  @Query(() => GetImageUrlOutput)
  imageUrl(@Args('input') input: GetImageUrlInput): GetImageUrlOutput {
    return this.commonService.makeImageUrl(input);
  }

  @Query(() => FetchMoviesByKeywordOutput)
  async moviesByKeyword(
    @Args('input') input: FetchMoviesByKeywordInput,
  ): Promise<FetchMoviesByKeywordOutput> {
    return this.commonService.fetchMoviesByKeyword(input);
  }
}
