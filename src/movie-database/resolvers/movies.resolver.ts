import { Args, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from '@/movie-database/services/movies.service';
import {
  FetchPopularMoviesInput,
  FetchPopularMoviesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-popular-movies.dto';
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-top-rated-movies.dto';
import {
  FetchNowPlayingMoviesInput,
  FetchNowPlayingMoviesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-now-playing-movies.dto';
import {
  FetchLatestMovieInput,
  FetchLatestMovieOutput,
} from '@/movie-database/dtos/movie-contents/fetch-latest-movie.dto';
import {
  FetchUpcomingMoviesInput,
  FetchUpcomingMoviesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-upcoming-movies.dto';
import {
  FetchMovieDetailsInput,
  FetchMovieDetailsOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-details.dto';
import {
  FetchMovieKeywordsInput,
  FetchMovieKeywordsOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-keywords.dto';
import {
  FetchRecommendationMoviesInput,
  FetchRecommendationMoviesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-recommendation-movies.dto';
import {
  FetchMovieVideosByIdInput,
  FetchMovieVideosByIdOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-videos.dto';
import {
  FetchSimilarMoviesByIdInput,
  FetchSimilarMoviesByIdOutput,
} from '@/movie-database/dtos/movie-contents/fetch-similar-movies.dto';
import {
  FetchMovieImagesByIdInput,
  FetchMovieImagesByIdOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-images.dto';
import {
  FetchMovieCreditsByIdInput,
  FetchMovieCreditsByIdOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-credits.dto';
import {
  FetchMovieAlternativeTitlesInput,
  FetchMovieAlternativeTitlesOutput,
} from '@/movie-database/dtos/movie-contents/fetch-movie-alternative-titles.dto';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  // Movie content start.

  @Query(() => FetchPopularMoviesOutput)
  async popularMovies(
    @Args('input') input: FetchPopularMoviesInput,
  ): Promise<FetchPopularMoviesOutput> {
    return this.moviesService.fetchPopularMovies(input);
  }

  @Query(() => FetchTopRatedMoviesOutput)
  async topRatedMovies(
    @Args('input') input: FetchTopRatedMoviesInput,
  ): Promise<FetchTopRatedMoviesOutput> {
    return this.moviesService.fetchTopRatedMovies(input);
  }

  @Query(() => FetchNowPlayingMoviesOutput)
  async nowPlayingMovies(
    @Args('input') input: FetchNowPlayingMoviesInput,
  ): Promise<FetchNowPlayingMoviesOutput> {
    return this.moviesService.fetchNowPlayingMovies(input);
  }

  @Query(() => FetchLatestMovieOutput)
  async latestMovie(
    @Args('input') input: FetchLatestMovieInput,
  ): Promise<FetchLatestMovieOutput> {
    return this.moviesService.fetchLatestMovie(input);
  }

  @Query(() => FetchUpcomingMoviesOutput)
  async upcomingMovies(
    @Args('input') input: FetchUpcomingMoviesInput,
  ): Promise<FetchUpcomingMoviesOutput> {
    return this.moviesService.fetchUpcomingMovies(input);
  }

  @Query(() => FetchMovieDetailsOutput)
  async movieDetails(
    @Args('input') input: FetchMovieDetailsInput,
  ): Promise<FetchMovieDetailsOutput> {
    return this.moviesService.fetchMovieDetailsById(input);
  }

  @Query(() => FetchMovieKeywordsOutput)
  async movieKeywords(
    @Args('input') input: FetchMovieKeywordsInput,
  ): Promise<FetchMovieKeywordsOutput> {
    return this.moviesService.fetchMovieKeywordsById(input);
  }

  @Query(() => FetchRecommendationMoviesOutput)
  async recommendationMovies(
    @Args('input') input: FetchRecommendationMoviesInput,
  ): Promise<FetchRecommendationMoviesOutput> {
    return this.moviesService.fetchRecommendationMoviesById(input);
  }

  @Query(() => FetchMovieVideosByIdOutput)
  async movieVideos(
    @Args('input') input: FetchMovieVideosByIdInput,
  ): Promise<FetchMovieVideosByIdOutput> {
    return this.moviesService.fetchMovieVideosById(input);
  }

  @Query(() => FetchSimilarMoviesByIdOutput)
  async similarMovies(
    @Args('input') input: FetchSimilarMoviesByIdInput,
  ): Promise<FetchSimilarMoviesByIdOutput> {
    return this.moviesService.fetchSimilarMoviesById(input);
  }

  @Query(() => FetchMovieImagesByIdOutput)
  async movieImages(
    @Args('input') input: FetchMovieImagesByIdInput,
  ): Promise<FetchMovieImagesByIdOutput> {
    return this.moviesService.fetchMovieImagesById(input);
  }

  @Query(() => FetchMovieCreditsByIdOutput)
  async movieCredits(
    @Args('input') input: FetchMovieCreditsByIdInput,
  ): Promise<FetchMovieCreditsByIdOutput> {
    return this.moviesService.fetchMovieCreditsById(input);
  }

  @Query(() => FetchMovieAlternativeTitlesOutput)
  async movieAlternativeTitles(
    @Args('input') input: FetchMovieAlternativeTitlesInput,
  ): Promise<FetchMovieAlternativeTitlesOutput> {
    return this.moviesService.fetchMovieAlternativeTitlesById(input);
  }
  // Movie content end.
}
