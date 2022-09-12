import { Injectable } from '@nestjs/common';
import {
  GetImageUrlInput,
  GetImageUrlOutput,
} from '@/movie-database/dtos/commons/get-image-url.dto';
import {
  FetchMoviesByKeywordInput,
  FetchMoviesByKeywordOutput,
  FetchMoviesByKeywordResponse,
} from '@/movie-database/dtos/commons/fetch-movies-by-keyword.dto';
import { movieDatabaseFetcher } from '../helpers/movies-helper';
import { ConfigService } from '@nestjs/config';
import {
  FetchKeywordDetailsInput,
  FetchKeywordDetailsOutput,
  FetchKeywordDetailsResponse,
} from '@/movie-database/dtos/commons/fetch-keyword-details.dto';

@Injectable()
export class MovieDatabaseCommonService {
  constructor(private readonly configService: ConfigService) {}

  makeImageUrl({ isOriginal }: GetImageUrlInput): GetImageUrlOutput {
    const origin = 'https://image.tmdb.org';
    const path = `/t/p/${isOriginal ? 'original' : 'w500'}`;
    const fullUrl = `${origin}${path}`;
    return {
      origin,
      path,
      fullUrl,
    };
  }

  /**
   * Get the movies that belong to a keyword.
   */
  async fetchMoviesByKeyword({
    keywordId,
    language,
    includeAdult,
  }: FetchMoviesByKeywordInput): Promise<FetchMoviesByKeywordOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchMoviesByKeywordResponse>({
        configService: this.configService,
        path: `/keyword/${keywordId}}/movies`,
        queries: { language, include_adult: includeAdult },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchMoviesByKeyword]', err);
      return {
        ok: false,
        error: 'Failed fetch movies by keyword.',
      };
    }
  }

  /**
   * Get the keyword details by ID.
   */
  async fetchKeywordDetails({
    keywordId,
  }: FetchKeywordDetailsInput): Promise<FetchKeywordDetailsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchKeywordDetailsResponse>({
        configService: this.configService,
        path: `/keyword/${keywordId}`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchKeywordDetails]', err);
      return {
        ok: false,
        error: 'Failed fetch keyword details.',
      };
    }
  }
}
