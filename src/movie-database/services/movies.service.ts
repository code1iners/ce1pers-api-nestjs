import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieDatabaseFetcher } from '@/movie-database/helpers/movies-helper';
import {
  CommonFetchMoviesOutput,
  FetchMovieDetailsAppendToResponse,
  FetchMovieDetailsResponse,
} from '@/movie-database/dtos/movies/shared.dto';
import {
  FetchPopularMoviesInput,
  FetchPopularMoviesOutput,
} from '@/movie-database/dtos/movies/fetch-popular-movies.dto';
import { FetchPopularMoviesResponse } from '@/movie-database/dtos/movies/fetch-popular-movies.dto';
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
  FetchTopRatedMoviesResponse,
} from '@/movie-database/dtos/movies/fetch-top-rated-movies.dto';
import {
  FetchNowPlayingMoviesInput,
  FetchNowPlayingMoviesOutput,
  FetchNowPlayingMoviesResponse,
} from '@/movie-database/dtos/movies/fetch-now-playing-movies.dto';
import {
  FetchLatestMovieInput,
  FetchLatestMovieOutput,
} from '@/movie-database/dtos/movies/fetch-latest-movie.dto';
import {
  FetchUpcomingMoviesInput,
  FetchUpcomingMoviesOutput,
  FetchUpcomingMoviesResponse,
} from '@/movie-database/dtos/movies/fetch-upcoming-movies.dto';
import {
  FetchMovieDetailsInput,
  FetchMovieDetailsOutput,
} from '@/movie-database/dtos/movies/fetch-movie-details.dto';
import {
  FetchMovieKeywordsInput,
  FetchMovieKeywordsOutput,
  FetchMovieKeywordsResponse,
} from '@/movie-database/dtos/movies/fetch-movie-keywords.dto';
import {
  FetchRecommendationMoviesInput,
  FetchRecommendationMoviesOutput,
} from '@/movie-database/dtos/movies/fetch-recommendation-movies.dto';
import {
  FetchMovieVideosByIdInput,
  FetchMovieVideosByIdOutput,
  FetchMovieVideosByIdResponse,
} from '@/movie-database/dtos/movies/fetch-movie-videos.dto';
import {
  FetchSimilarMoviesByIdInput,
  FetchSimilarMoviesByIdOutput,
} from '@/movie-database/dtos/movies/fetch-similar-movies.dto';
import {
  FetchMovieImagesByIdInput,
  FetchMovieImagesByIdOutput,
  FetchMovieImagesResponse,
} from '@/movie-database/dtos/movies/fetch-movie-images.dto';
import {
  FetchMovieCreditsByIdInput,
  FetchMovieCreditsByIdOutput,
  FetchMovieCreditsResponse,
} from '@/movie-database/dtos/movies/fetch-movie-credits.dto';
import {
  FetchMovieAlternativeTitlesInput,
  FetchMovieAlternativeTitlesOutput,
  FetchMovieAlternativeTitlesResponse,
} from '@/movie-database/dtos/movies/fetch-movie-alternative-titles.dto';
import {
  FetchMovieGenreListInput,
  FetchMovieGenreListOutput,
  FetchMovieGenreListResponse,
} from '../dtos/movies/fetch-movie-genre-list.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Get a list of the current popular movies on TMDB. This list updates daily.
   */
  async fetchPopularMovies({
    language,
    page,
    region,
  }: FetchPopularMoviesInput): Promise<FetchPopularMoviesOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchPopularMoviesResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTopRatedMoviesResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchNowPlayingMoviesResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieDetailsResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchUpcomingMoviesResponse>({
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
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchMovieDetailsAppendToResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieKeywordsResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<CommonFetchMoviesOutput>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieVideosByIdResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<CommonFetchMoviesOutput>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieImagesResponse>({
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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieCreditsResponse>({
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

  async fetchMovieAlternativeTitlesById({
    movieId,
  }: FetchMovieAlternativeTitlesInput): Promise<FetchMovieAlternativeTitlesOutput> {
    try {
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchMovieAlternativeTitlesResponse>({
          configService: this.configService,
          path: `/movie/${movieId}/alternative_titles`,
        });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieAlternativeTitlesById]', err);
      return {
        ok: false,
        error: 'Failed fetch movie alternative titles by ID.',
      };
    }
  }

  /**
   * Get the list of official genres for movies.
   */
  async fetchMovieGenreList({
    language,
  }: FetchMovieGenreListInput): Promise<FetchMovieGenreListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMovieGenreListResponse>({
        configService: this.configService,
        path: `/genre/movie/list`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMovieGenreList]', err);
      return {
        ok: false,
        error: 'Failed fetch movie genre list.',
      };
    }
  }
}
