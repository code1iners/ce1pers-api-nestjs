import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import { makeMoviesRequest } from '@/movies/utils/movies-helper';
import {
  AvailableRegionResultCamelCase,
  FetchAvailableRegionResponse,
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchContentProvidersInput,
  FetchContentProvidersOutput,
  FetchContentProvidersResponse,
} from '@/movies/dtos/watch-providers/fetch-content-providers.dto';

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
      const { results: originResults } =
        await request.json<FetchAvailableRegionResponse>();
      if (!originResults) throw new Error('Failed fetching.');
      const results = originResults.map(
        convertSnakeToCamel<AvailableRegionResultCamelCase>,
      );

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
   * Fetch movie or tv providers.
   */
  async fetchContentProviders({
    language,
    watchRegion: watch_region,
    mediaContentType,
  }: FetchContentProvidersInput): Promise<FetchContentProvidersOutput> {
    try {
      // Make request.
      const request = makeMoviesRequest({
        configService: this.configService,
        path: `/watch/providers/${mediaContentType.toLowerCase()}`,
        queries: { language, watch_region },
      });

      // Fetching.
      const { results } = await request.json<FetchContentProvidersResponse>();
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
