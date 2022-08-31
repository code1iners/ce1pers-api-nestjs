import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';
import { FetchAvailableRegionResponse } from '@/movies/types/watch-providers/fetch-available-regions.type';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';

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
