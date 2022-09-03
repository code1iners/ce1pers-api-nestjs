import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  FetchMoviePopularInput,
  FetchMoviePopularOutput,
} from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import { movieFetcher } from '@/movies/utils/movies-helper';
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
}
