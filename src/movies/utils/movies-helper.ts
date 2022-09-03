import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import type { ConfigService } from '@nestjs/config';
import got, { CancelableRequest } from 'got';
import * as qs from 'query-string';

interface MakeMoviesRequest {
  configService: ConfigService;
  path: string;
  queries?: any;
}

/**
 * Make movies request.
 */
export const makeMoviesRequest = ({
  configService,
  path,
  queries,
}: MakeMoviesRequest) => {
  const origin = configService.get('MOVIE_DATABASE_ORIGIN');
  const api_key = configService.get('MOVIE_DATABASE_API_KEY');
  const url = qs.stringifyUrl({
    url: `${origin}${path.toLowerCase()}`,
    query: {
      api_key,
      ...queries,
    },
  });

  return got.get(url);
};

interface FetchMoviesByRequestProps extends MakeMoviesRequest {}

/**
 * Fetch movies by request.
 */
export const movieFetcher = async <T>({
  configService,
  path,
  queries,
}: FetchMoviesByRequestProps) => {
  // Make request.
  const request = makeMoviesRequest({
    configService,
    path,
    queries,
  });

  // Fetching.
  const origin = await request.json();
  if (!origin) throw new Error('Failed fetching.');

  // Convert case style.
  return convertSnakeToCamel<T>(origin);
};
