import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import {
  FetchMoviePopularInput,
  FetchMoviePopularOutput,
} from '@/movies/dtos/movie-contents/fetch-movies-popular.dto';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';
import { FetchMoviePopularResponse } from '@/movies/types/movie-contents/fetch-movie-popular.type';

@Injectable()
export class MovieContentService {
  constructor(private readonly configService: ConfigService) {}

  async fetchMoviePopulars({
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
      console.error('[fetchMoviePopulars]', err);
      return {
        ok: false,
        error: 'Failed fetch movie populars.',
      };
    }
  }
}
