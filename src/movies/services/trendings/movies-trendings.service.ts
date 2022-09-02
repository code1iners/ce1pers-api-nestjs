import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { convertSnakeToCamel } from '@/libs/case-styles-transformers';
import {
  FetchTrendingInput,
  FetchTrendingOutput,
} from '@/movies/dtos/trendings/fetch-trending.dto';
import { FetchTrendingResponse } from '@/movies/types/trendings/fetch-trending.type';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';

@Injectable()
export class MovieTrendingService {
  constructor(private readonly configService: ConfigService) {}

  async fetchTrending({
    mediaType,
    timeWindow,
  }: FetchTrendingInput): Promise<FetchTrendingOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: `/trending/${mediaType}/${timeWindow}`,
      });

      // Fetching.
      const originTrending = await request.json<FetchTrendingResponse>();
      if (!originTrending) throw new Error('Failed fetching.');

      const trending =
        convertSnakeToCamel<FetchTrendingResponse>(originTrending);

      return {
        ok: true,
        trending,
      };
    } catch (error) {
      console.error('[fetchTrending]', error);
      return {
        ok: false,
        error: 'Failed fetch trending.',
      };
    }
  }
}
