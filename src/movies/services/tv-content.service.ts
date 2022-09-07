import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  FetchLatestTvInput,
  FetchLatestTvOutput,
  FetchLatestTvResponse,
} from '@/movies/dtos/tv-contents/fetch-latest-tv.dto';
import { movieDatabaseFetcher } from '@/movies/utils/movies-helper';

@Injectable()
export class TvContentService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   */
  async fetchLatestTv({
    language,
  }: FetchLatestTvInput): Promise<FetchLatestTvOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchLatestTvResponse>({
        configService: this.configService,
        path: `/tv/latest`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchLatestTv]', err);
      return {
        ok: false,
        error: 'Failed fetch latest tv.',
      };
    }
  }
}
