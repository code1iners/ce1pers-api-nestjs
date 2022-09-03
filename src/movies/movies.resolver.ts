import { Args, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from '@/movies/movies.service';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchContentProvidersInput,
  FetchContentProvidersOutput,
} from '@/movies/dtos/watch-providers/fetch-content-providers.dto';
import {
  FetchTrendingMoviesInput,
  FetchTrendingMoviesOutput,
} from '@/movies/dtos/trending-movies/fetch-trending-movies.dto';
import {
  FetchMoviePopularInput,
  FetchMoviePopularOutput,
} from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';

@Resolver()
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query(() => FetchAvailableRegionsOutput)
  async availableRegions(
    @Args('input') input: FetchAvailableRegionsInput,
  ): Promise<FetchAvailableRegionsOutput> {
    return this.movieService.providers.fetchAvailableRegions(input);
  }

  @Query(() => FetchContentProvidersOutput)
  async contentProviders(
    @Args('input') input: FetchContentProvidersInput,
  ): Promise<FetchContentProvidersOutput> {
    return this.movieService.providers.fetchContentProviders(input);
  }

  @Query(() => FetchTrendingMoviesOutput)
  async trendingMovies(
    @Args('input') input: FetchTrendingMoviesInput,
  ): Promise<FetchTrendingMoviesOutput> {
    return this.movieService.trendings.fetchTrendingMovies(input);
  }

  @Query(() => FetchMoviePopularOutput)
  async popularMovies(
    @Args('input') input: FetchMoviePopularInput,
  ): Promise<FetchMoviePopularOutput> {
    return this.movieService.movies.fetchPopularMovies(input);
  }
}
