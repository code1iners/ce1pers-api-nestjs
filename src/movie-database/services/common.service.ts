import { Injectable } from '@nestjs/common';
import {
  GetImageUrlInput,
  GetImageUrlOutput,
} from '@/movie-database/dtos/commons/get-image-url.dto';
import {
  FetchMoviesByKeywordInput,
  FetchMoviesByKeywordOutput,
  FetchMoviesByKeywordResponse,
} from '../dtos/commons/fetch-movies-by-keyword.dto';
import { movieDatabaseFetcher } from '../helpers/movies-helper';
import { ConfigService } from '@nestjs/config';

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
}
