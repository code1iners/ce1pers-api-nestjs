import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';
import { FetchAvailableRegionResponse } from '@/movies/types/watch-providers/fetch-available-regions.type';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchMovieProvidersInput,
  FetchMovieProvidersOutput,
} from '@/movies/dtos/watch-providers/fetch-movie-providers.dto';
import { FetchMovieProvidersResponse } from '@/movies/types/watch-providers/fetch-movie-providers.type';

@Injectable()
export class MovieProviderService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Fetch available regions.
   */
  async fetchAvailableRegions({
    language,
  }: FetchAvailableRegionsInput): Promise<FetchAvailableRegionsOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: '/watch/providers/regions',
        queries: { language },
      });

      // Fetching.
      const { results } = await request.json<FetchAvailableRegionResponse>();
      if (!results) throw new Error('Failed fetching.');

      return {
        ok: true,
        results,
      };
    } catch (error) {
      console.error('[fetchAvailableRegions]', error);
      return {
        ok: false,
        error: 'Failed fetch available regions.',
      };
    }
  }

  /**
   * Fetch movie providers.
   */
  async fetchMovieProviders({
    language,
    watch_region,
  }: FetchMovieProvidersInput): Promise<FetchMovieProvidersOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: '/watch/providers/movie',
        queries: { language, watch_region },
      });

      // Fetching.
      const { results } = await request.json<FetchMovieProvidersResponse>();
      if (!results) throw new Error('Failed fetching.');

      return {
        ok: true,
        results,
      };
    } catch (error) {
      console.error('[fetchMovieProviders]', error);
      return {
        ok: false,
        error: 'Failed fetch movie providers.',
      };
    }
  }
}
