import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieFetcher } from '@/movies/utils/movies-helper';
import {
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
  async fetchMovieDetails({
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
      console.error('[fetchMovieDetails]', err);
      return {
        ok: false,
        error: 'Failed fetch movie details.',
      };
    }
  }
}
