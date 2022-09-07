import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import {
  FetchTrendingMoviesInput,
  FetchTrendingMoviesOutput,
  FetchTrendingResponse,
} from '@/movies/dtos/trending-movies/fetch-trending-movies.dto';
import {
  makeMovieDatabaseRequest,
  movieDatabaseFetcher,
} from '@/movies/utils/movies-helper';

@Injectable()
export class MovieTrendingService {
  constructor(private readonly configService: ConfigService) {}

  async fetchTrendingMovies({
    mediaType,
    timeWindow,
  }: FetchTrendingMoviesInput): Promise<FetchTrendingMoviesOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTrendingResponse>({
        configService: this.configService,
        path: `/trending/${mediaType}/${timeWindow}`,
      });

      return {
        ok: true,
        data,
      };
    } catch (error) {
      console.error('[fetchTrendingMovies]', error);
      return {
        ok: false,
        error: 'Failed fetch trending movies.',
      };
    }
  }
}
