import type { ConfigService } from '@nestjs/config';
import got from 'got';
import * as qs from 'query-string';

interface MakeMoviesRequest {
  configService: ConfigService;
  path: string;
  queries: any;
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
    url: `${origin}/${path}`,
    query: {
      api_key,
      ...queries,
    },
  });

  return got.get(url);
};
