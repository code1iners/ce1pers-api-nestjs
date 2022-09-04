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
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-top-rated-movies.dto';
import {
  FetchNowPlayingMoviesInput,
  FetchNowPlayingMoviesOutput,
} from './dtos/movie-contents/fetch-now-playing-movies.dto';
import {
  FetchLatestMovieInput,
  FetchLatestMovieOutput,
} from './dtos/movie-contents/fetch-latest-movie.dto';

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

  @Query(() => FetchTopRatedMoviesOutput)
  async topRatedMovies(
    @Args('input') input: FetchTopRatedMoviesInput,
  ): Promise<FetchTopRatedMoviesOutput> {
    return this.movieService.movies.fetchTopRatedMovies(input);
  }

  @Query(() => FetchNowPlayingMoviesOutput)
  async nowPlayingMovies(
    @Args('input') input: FetchNowPlayingMoviesInput,
  ): Promise<FetchNowPlayingMoviesOutput> {
    return this.movieService.movies.fetchNowPlayingMovies(input);
  }

  @Query(() => FetchLatestMovieOutput)
  async latestMovie(
    @Args('input') input: FetchLatestMovieInput,
  ): Promise<FetchLatestMovieOutput> {
    return this.movieService.movies.fetchLatestMovie(input);
  }
}