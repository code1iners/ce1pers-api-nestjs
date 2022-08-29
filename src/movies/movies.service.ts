import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import * as qs from 'query-string';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';
import {
  AvailableRegionResult,
  FetchAvailableRegionResponse,
} from '@/movies/types/watch-providers/fetch-available-regions.type';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';

@Injectable()
export class MoviesService {
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
        path: 'watch/providers/regions',
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
}
