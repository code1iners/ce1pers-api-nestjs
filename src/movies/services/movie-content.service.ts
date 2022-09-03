import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import {
  FetchMoviePopularInput,
  FetchMoviePopularOutput,
} from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';
import { FetchMoviePopularResponse } from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import {
  FetchTopRatedMoviesInput,
  FetchTopRatedMoviesOutput,
  FetchTopRatedMoviesResponse,
} from '@/movies/dtos/movie-contents/fetch-top-rated-movies.dto';

@Injectable()
export class MovieContentService {
  constructor(private readonly configService: ConfigService) {}

  async fetchPopularMovies({
    language,
    page,
    region,
  }: FetchMoviePopularInput): Promise<FetchMoviePopularOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: `/movie/popular`,
        queries: { language, page, region },
      });

      // Fetching.
      const origin = await request.json();
      if (!origin) throw new Error('Failed fetching.');

      const data = convertSnakeToCamel<FetchMoviePopularResponse>(origin);

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
   * Fetch top rated movie list.
   */
  async fetchTopRatedMovies({
    page,
    region,
    language,
  }: FetchTopRatedMoviesInput): Promise<FetchTopRatedMoviesOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: `/movie/top_rated`,
        queries: { language, page, region },
      });

      // Fetching.
      const origin = await request.json();
      if (!origin) throw new Error('Failed fetching.');

      const data = convertSnakeToCamel<FetchTopRatedMoviesResponse>(origin);

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
}
