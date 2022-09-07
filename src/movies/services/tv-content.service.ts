import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieDatabaseFetcher } from '@/movies/utils/movies-helper';
import {
  FetchLatestTvInput,
  FetchLatestTvOutput,
  FetchLatestTvResponse,
} from '@/movies/dtos/tv-contents/fetch-latest-tv.dto';
import {
  FetchPopularTvListInput,
  FetchPopularTvListOutput,
  FetchPopularTvListResponse,
} from '@/movies/dtos/tv-contents/fetch-popular-tv.dto';
import {
  FetchTopRatedTvListInput,
  FetchTopRatedTvListOutput,
} from '../dtos/tv-contents/fetch-top-rated-tv.dto';

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

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   */
  async fetchPopularTvList({
    page,
    language,
  }: FetchPopularTvListInput): Promise<FetchPopularTvListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchPopularTvListResponse>({
        configService: this.configService,
        path: `/tv/popular`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchPopularTvList]', err);
      return {
        ok: false,
        error: 'Failed fetch popular tv list.',
      };
    }
  }

  /**
   * Get a list of the top rated TV shows on TMDB.
   */
  async fetchTopRatedTvList({
    page,
    language,
  }: FetchTopRatedTvListInput): Promise<FetchTopRatedTvListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchPopularTvListResponse>({
        configService: this.configService,
        path: `/tv/top_rated`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTopRatedTvList]', err);
      return {
        ok: false,
        error: 'Failed fetch top rated tv list.',
      };
    }
  }
}
