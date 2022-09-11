import { FetchLatestTvInput } from '@/movies/dtos/tv-contents/fetch-latest-tv.dto';
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
  FetchPopularMoviesInput,
  FetchPopularMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-popular-movies.dto';
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-top-rated-movies.dto';
import {
  FetchNowPlayingMoviesInput,
  FetchNowPlayingMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-now-playing-movies.dto';
import {
  FetchLatestMovieInput,
  FetchLatestMovieOutput,
} from '@/movies/dtos/movie-contents/fetch-latest-movie.dto';
import {
  FetchUpcomingMoviesInput,
  FetchUpcomingMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-upcoming-movies.dto';
import {
  FetchMovieDetailsInput,
  FetchMovieDetailsOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-details.dto';
import {
  FetchMovieKeywordsInput,
  FetchMovieKeywordsOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-keywords.dto';
import {
  FetchRecommendationMoviesInput,
  FetchRecommendationMoviesOutput,
} from '@/movies/dtos/movie-contents/fetch-recommendation-movies.dto';
import {
  FetchMovieVideosByIdInput,
  FetchMovieVideosByIdOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-videos.dto';
import {
  FetchSimilarMoviesByIdInput,
  FetchSimilarMoviesByIdOutput,
} from '@/movies/dtos/movie-contents/fetch-similar-movies.dto';
import {
  FetchMovieImagesByIdInput,
  FetchMovieImagesByIdOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-images.dto';
import {
  FetchMovieCreditsByIdInput,
  FetchMovieCreditsByIdOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-credits.dto';
import {
  FetchMovieAlternativeTitlesInput,
  FetchMovieAlternativeTitlesOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-alternative-titles.dto';
import { FetchLatestTvOutput } from './dtos/tv-contents/fetch-latest-tv.dto';
import {
  FetchPopularTvListInput,
  FetchPopularTvListOutput,
} from './dtos/tv-contents/fetch-popular-tv.dto';
import {
  FetchTopRatedTvListInput,
  FetchTopRatedTvListOutput,
} from './dtos/tv-contents/fetch-top-rated-tv.dto';
import {
  FetchTvOnTheAirListInput,
  FetchTvOnTheAirListOutput,
} from './dtos/tv-contents/fetch-tv-on-the-air.dto';
import {
  FetchTvWatchProvidersInput,
  FetchTvWatchProvidersOutput,
} from './dtos/tv-contents/fetch-tv-watch-providers.dto';
import {
  FetchTvVideosInput,
  FetchTvVideosOutput,
} from './dtos/tv-contents/fetch-tv-videos.dto';
import {
  FetchTvTranslationsInput,
  FetchTvTranslationsOutput,
} from './dtos/tv-contents/fetch-tv-translation.dto';
import {
  FetchSimilarTvShowsInput,
  FetchSimilarTvShowsOutput,
} from './dtos/tv-contents/fetch-similar-tv-shows.dto';
import {
  FetchTvReviewsInput,
  FetchTvReviewsOutput,
} from './dtos/tv-contents/fetch-tv-reviews.dto';
import {
  FetchRecommendationTvShowsInput,
  FetchRecommendationTvShowsOutput,
} from './dtos/tv-contents/fetch-recommendation-tv-shows.dto';
import {
  FetchTvKeywordsInput,
  FetchTvKeywordsOutput,
} from './dtos/tv-contents/fetch-tv-keywords.dto';
import {
  FetchTvShowCreditsInput,
  FetchTvShowCreditsOutput,
} from './dtos/tv-contents/fetch-tv-show-credits.dto';

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

  // Movie content start.
  @Query(() => FetchTrendingMoviesOutput)
  async trendingMovies(
    @Args('input') input: FetchTrendingMoviesInput,
  ): Promise<FetchTrendingMoviesOutput> {
    return this.movieService.trendings.fetchTrendingMovies(input);
  }

  @Query(() => FetchPopularMoviesOutput)
  async popularMovies(
    @Args('input') input: FetchPopularMoviesInput,
  ): Promise<FetchPopularMoviesOutput> {
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

  @Query(() => FetchUpcomingMoviesOutput)
  async upcomingMovies(
    @Args('input') input: FetchUpcomingMoviesInput,
  ): Promise<FetchUpcomingMoviesOutput> {
    return this.movieService.movies.fetchUpcomingMovies(input);
  }

  @Query(() => FetchMovieDetailsOutput)
  async movieDetails(
    @Args('input') input: FetchMovieDetailsInput,
  ): Promise<FetchMovieDetailsOutput> {
    return this.movieService.movies.fetchMovieDetailsById(input);
  }

  @Query(() => FetchMovieKeywordsOutput)
  async movieKeywords(
    @Args('input') input: FetchMovieKeywordsInput,
  ): Promise<FetchMovieKeywordsOutput> {
    return this.movieService.movies.fetchMovieKeywordsById(input);
  }

  @Query(() => FetchRecommendationMoviesOutput)
  async recommendationMovies(
    @Args('input') input: FetchRecommendationMoviesInput,
  ): Promise<FetchRecommendationMoviesOutput> {
    return this.movieService.movies.fetchRecommendationMoviesById(input);
  }

  @Query(() => FetchMovieVideosByIdOutput)
  async movieVideos(
    @Args('input') input: FetchMovieVideosByIdInput,
  ): Promise<FetchMovieVideosByIdOutput> {
    return this.movieService.movies.fetchMovieVideosById(input);
  }

  @Query(() => FetchSimilarMoviesByIdOutput)
  async similarMovies(
    @Args('input') input: FetchSimilarMoviesByIdInput,
  ): Promise<FetchSimilarMoviesByIdOutput> {
    return this.movieService.movies.fetchSimilarMoviesById(input);
  }

  @Query(() => FetchMovieImagesByIdOutput)
  async movieImages(
    @Args('input') input: FetchMovieImagesByIdInput,
  ): Promise<FetchMovieImagesByIdOutput> {
    return this.movieService.movies.fetchMovieImagesById(input);
  }

  @Query(() => FetchMovieCreditsByIdOutput)
  async movieCredits(
    @Args('input') input: FetchMovieCreditsByIdInput,
  ): Promise<FetchMovieCreditsByIdOutput> {
    return this.movieService.movies.fetchMovieCreditsById(input);
  }

  @Query(() => FetchMovieAlternativeTitlesOutput)
  async movieAlternativeTitles(
    @Args('input') input: FetchMovieAlternativeTitlesInput,
  ): Promise<FetchMovieAlternativeTitlesOutput> {
    return this.movieService.movies.fetchMovieAlternativeTitlesById(input);
  }
  // Movie content end.

  // Tv content start.
  @Query(() => FetchLatestTvOutput)
  async latestTv(
    @Args('input') input: FetchLatestTvInput,
  ): Promise<FetchLatestTvOutput> {
    return this.movieService.tv.fetchLatestTv(input);
  }

  @Query(() => FetchPopularTvListOutput)
  async popularTvList(
    @Args('input') input: FetchPopularTvListInput,
  ): Promise<FetchPopularTvListOutput> {
    return this.movieService.tv.fetchPopularTvList(input);
  }

  @Query(() => FetchTopRatedTvListOutput)
  async topRatedTvList(
    @Args('input') input: FetchTopRatedTvListInput,
  ): Promise<FetchTopRatedTvListOutput> {
    return this.movieService.tv.fetchTopRatedTvList(input);
  }

  @Query(() => FetchTvOnTheAirListOutput)
  async tvOnTheAirList(
    @Args('input') input: FetchTvOnTheAirListInput,
  ): Promise<FetchTvOnTheAirListOutput> {
    return this.movieService.tv.fetchTvOnTheAirList(input);
  }

  @Query(() => FetchTvWatchProvidersOutput)
  async tvWatchProviders(
    @Args('input') input: FetchTvWatchProvidersInput,
  ): Promise<FetchTvWatchProvidersOutput> {
    return this.movieService.tv.fetchTvWatchProvidersById(input);
  }

  @Query(() => FetchTvVideosOutput)
  async tvVideos(
    @Args('input') input: FetchTvVideosInput,
  ): Promise<FetchTvVideosOutput> {
    return this.movieService.tv.fetchTvVideosById(input);
  }

  @Query(() => FetchTvTranslationsOutput)
  async tvTranslations(
    @Args('input') input: FetchTvTranslationsInput,
  ): Promise<FetchTvTranslationsOutput> {
    return this.movieService.tv.fetchTvTranslationsById(input);
  }

  @Query(() => FetchSimilarTvShowsOutput)
  async similarTvShows(
    @Args('input') input: FetchSimilarTvShowsInput,
  ): Promise<FetchSimilarTvShowsOutput> {
    return this.movieService.tv.fetchSimilarTvShowsById(input);
  }

  @Query(() => FetchTvReviewsOutput)
  async tvReviews(
    @Args('input') input: FetchTvReviewsInput,
  ): Promise<FetchTvReviewsOutput> {
    return this.movieService.tv.fetchTvReviewsById(input);
  }

  @Query(() => FetchRecommendationTvShowsOutput)
  async recommendationTvShows(
    @Args('input') input: FetchRecommendationTvShowsInput,
  ): Promise<FetchRecommendationTvShowsOutput> {
    return this.movieService.tv.fetchRecommendationTvShowsById(input);
  }

  @Query(() => FetchTvKeywordsOutput)
  async tvKeywords(
    @Args('input') input: FetchTvKeywordsInput,
  ): Promise<FetchTvKeywordsOutput> {
    return this.movieService.tv.fetchTvKeywordsById(input);
  }

  @Query(() => FetchTvShowCreditsOutput)
  async tvShowCredits(
    @Args('input') input: FetchTvShowCreditsInput,
  ): Promise<FetchTvShowCreditsOutput> {
    return this.movieService.tv.fetchTvShowCreditsById(input);
  }
  // Tv content end.
}
