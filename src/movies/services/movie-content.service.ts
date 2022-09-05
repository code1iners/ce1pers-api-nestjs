import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieFetcher } from '@/movies/utils/movies-helper';
import {
  CommonFetchMoviesOutput,
  FetchMovieDetailsAppendToResponse,
  FetchMovieDetailsResponse,
} from '@/movies/dtos/shared.dto';
import {
  FetchMoviePopularInput,
  FetchMoviePopularOutput,
} from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import { FetchMoviePopularResponse } from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
  FetchTopRatedMoviesResponse,
} from '@/movies/dtos/movie-contents/fetch-top-rated-movies.dto';
import {
  FetchNowPlayingMoviesInput,
  FetchNowPlayingMoviesOutput,
  FetchNowPlayingMoviesResponse,
} from '@/movies/dtos/movie-contents/fetch-now-playing-movies.dto';
import {
  FetchLatestMovieInput,
  FetchLatestMovieOutput,
} from '@/movies/dtos/movie-contents/fetch-latest-movie.dto';
import {
  FetchUpcomingMoviesInput,
  FetchUpcomingMoviesOutput,
  FetchUpcomingMoviesResponse,
} from '@/movies/dtos/movie-contents/fetch-upcoming-movies.dto';
import {
  FetchMovieDetailsInput,
  FetchMovieDetailsOutput,
} from '@/movies/dtos/movie-contents/fetch-movie-details.dto';
import {
  FetchMovieKeywordsInput,
  FetchMovieKeywordsOutput,
  FetchMovieKeywordsResponse,
} from '../dtos/movie-contents/fetch-movie-keywords.dto';
import {
  FetchRecommendationMoviesInput,
  FetchRecommendationMoviesOutput,
} from '../dtos/movie-contents/fetch-recommendation-movies.dto';
import {
  FetchMovieVideosByIdInput,
  FetchMovieVideosByIdOutput,
  FetchMovieVideosByIdResponse,
} from '../dtos/movie-contents/fetch-movie-videos.dto';
import {
  FetchSimilarMoviesByIdInput,
  FetchSimilarMoviesByIdOutput,
} from '../dtos/movie-contents/fetch-similar-movies.dto';
import {
  FetchMovieImagesByIdInput,
  FetchMovieImagesByIdOutput,
  FetchMovieImagesResponse,
} from '../dtos/movie-contents/fetch-movie-images.dto';
import {
  FetchMovieCreditsByIdInput,
  FetchMovieCreditsByIdOutput,
  FetchMovieCreditsResponse,
} from '../dtos/movie-contents/fetch-movie-credits.dto';

@Injectable()
export class MovieContentService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Get a list of the current popular movies on TMDB. This list updates daily.
   */
  async fetchPopularMovies({
    language,
    page,
    region,
  }: FetchMoviePopularInput): Promise<FetchMoviePopularOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMoviePopularResponse>({
        configService: this.configService,
        path: `/movie/popular`,
        queries: { language, page, region },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchPopularMovies]', err);
      return {
        ok: false,
        error: 'Failed fetch popular movies.',
      };
    }
  }

  /**
   * * Get the top rated movies on TMDB.
   */
  async fetchTopRatedMovies({
    page,
    region,
    language,
  }: FetchTopRatedMoviesInput): Promise<FetchTopRatedMoviesOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchTopRatedMoviesResponse>({
        configService: this.configService,
        path: `/movie/top_rated`,
        queries: { language, page, region },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTopRatedMovies]', err);
      return {
        ok: false,
        error: 'Failed fetch top rated movies.',
      };
    }
  }

  /**
   * Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
   * You can optionally specify a region parameter which will narrow the search to only look for theatrical release dates within the specified country.
   */
  async fetchNowPlayingMovies({
    page,
    region,
    language,
  }: FetchNowPlayingMoviesInput): Promise<FetchNowPlayingMoviesOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchNowPlayingMoviesResponse>({
        configService: this.configService,
        path: `/movie/now_playing`,
        queries: { language, page, region },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchNowPlayingMovies]', err);
      return {
        ok: false,
        error: 'Failed fetch now playing movies.',
      };
    }
  }

  /**
   * Get the most newly created movie. This is a live response and will continuously change.
   */
  async fetchLatestMovie({
    language,
  }: FetchLatestMovieInput): Promise<FetchLatestMovieOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieDetailsResponse>({
        configService: this.configService,
        path: `/movie/latest`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchLatestMovie]', err);
      return {
        ok: false,
        error: 'Failed fetch latest movie.',
      };
    }
  }

  /**
   * Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
   * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
   */
  async fetchUpcomingMovies({
    page,
    region,
    language,
  }: FetchUpcomingMoviesInput): Promise<FetchUpcomingMoviesOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchUpcomingMoviesResponse>({
        configService: this.configService,
        path: `/movie/upcoming`,
        queries: { page, region, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchUpcomingMovies]', err);
      return {
        ok: false,
        error: 'Failed fetch upcoming movies.',
      };
    }
  }

  /**
   * Get the primary information about a movie.
   */
  async fetchMovieDetailsById({
    movieId,
    language,
    appendToResponse,
  }: FetchMovieDetailsInput): Promise<FetchMovieDetailsOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieDetailsAppendToResponse>({
        configService: this.configService,
        path: `/movie/${movieId}`,
        queries: { language, append_to_response: appendToResponse },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieDetailsById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie details by ID.',
      };
    }
  }

  /**
   * Get the keywords that have been added to a movie.
   */
  async fetchMovieKeywordsById({
    movieId,
  }: FetchMovieKeywordsInput): Promise<FetchMovieKeywordsOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieKeywordsResponse>({
        configService: this.configService,
        path: `/movie/${movieId}/keywords`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieKeywordsById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie keywords by ID.',
      };
    }
  }

  /**
   * Get a list of recommended movies for a movie.
   */
  async fetchRecommendationMoviesById({
    movieId,
    page,
    language,
  }: FetchRecommendationMoviesInput): Promise<FetchRecommendationMoviesOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<CommonFetchMoviesOutput>({
        configService: this.configService,
        path: `/movie/${movieId}/recommendations`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchRecommendationMoviesById]', err);
      return {
        ok: false,
        error: 'Failed fetch recommendation movies by ID.',
      };
    }
  }

  /**
   * Get the videos that have been added to a movie.
   */
  async fetchMovieVideosById({
    movieId,
    language,
  }: FetchMovieVideosByIdInput): Promise<FetchMovieVideosByIdOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieVideosByIdResponse>({
        configService: this.configService,
        path: `/movie/${movieId}/videos`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieVideosById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie videos by ID.',
      };
    }
  }

  /**
   * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
   * These items are assembled by looking at keywords and genres.
   */
  async fetchSimilarMoviesById({
    movieId,
    page,
    language,
  }: FetchSimilarMoviesByIdInput): Promise<FetchSimilarMoviesByIdOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<CommonFetchMoviesOutput>({
        configService: this.configService,
        path: `/movie/${movieId}/similar`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchSimilarMoviesById]', err);
      return {
        ok: false,
        error: 'Failed fetch similar movies by ID.',
      };
    }
  }

  /**
   * Get the images that belong to a movie.
   */
  async fetchMovieImagesById({
    movieId,
  }: FetchMovieImagesByIdInput): Promise<FetchMovieImagesByIdOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieImagesResponse>({
        configService: this.configService,
        path: `/movie/${movieId}/images`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieImagesById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie images by ID.',
      };
    }
  }

  /**
   * Get the cast and crew for a movie.
   */
  async fetchMovieCreditsById({
    movieId,
    language,
  }: FetchMovieCreditsByIdInput): Promise<FetchMovieCreditsByIdOutput> {
    try {
      // Fetch movies.
      const data = await movieFetcher<FetchMovieCreditsResponse>({
        configService: this.configService,
        path: `/movie/${movieId}/credits`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieCreditsById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie credits by ID.',
      };
    }
  }
}
