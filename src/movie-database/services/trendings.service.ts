import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieDatabaseFetcher } from '@/movie-database/helpers/movies-helper';
import {
  FetchTrendingsInput,
  FetchTrendingsOutput,
  FetchTrendingsResponse,
} from '@/movie-database/dtos/trendings/fetch-trendings.dto';

@Injectable()
export class TrendingsService {
  constructor(private readonly configService: ConfigService) {}

  async fetchTrendingMovies({
    mediaType,
    timeWindow,
  }: FetchTrendingsInput): Promise<FetchTrendingsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTrendingsResponse>({
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
