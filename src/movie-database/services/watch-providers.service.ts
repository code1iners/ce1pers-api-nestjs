import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  makeMovieDatabaseRequest,
  movieDatabaseFetcher,
} from '@/movie-database/helpers/movies-helper';
import {
  FetchAvailableRegionResponse,
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movie-database/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchContentProvidersInput,
  FetchContentProvidersOutput,
  FetchContentProvidersResponse,
} from '@/movie-database/dtos/watch-providers/fetch-content-providers.dto';

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
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchAvailableRegionResponse>({
        configService: this.configService,
        path: '/watch/providers/regions',
        queries: { language },
      });

      return {
        ok: true,
        data,
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
      const request = makeMovieDatabaseRequest({
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
