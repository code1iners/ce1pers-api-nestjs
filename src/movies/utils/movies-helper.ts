import { convertSnakeToCamel } from '@/libs/case-styles-transformers/camel-caser';
import type { ConfigService } from '@nestjs/config';
import got from 'got';
import * as qs from 'query-string';

interface MakeMovieDatabaseRequestProps {
  configService: ConfigService;
  path: string;
  queries?: any;
}

/**
 * Make movie database request.
 */
export const makeMovieDatabaseRequest = ({
  configService,
  path,
  queries,
}: MakeMovieDatabaseRequestProps) => {
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

interface MovieDatabaseFetcherProps extends MakeMovieDatabaseRequestProps {}

/**
 * Fetch movies database contents by request.
 */
export const movieDatabaseFetcher = async <T>({
  configService,
  path,
  queries,
}: MovieDatabaseFetcherProps) => {
  // Make request.
  const request = makeMovieDatabaseRequest({
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

interface MakeImageUriProps {
  imagePath: string;
  isFullSize: boolean;
}
/**
 * You'll notice that movie, TV and person objects contain references to different file paths. In order to generate a fully working image URL, you'll need 3 pieces of data. Those pieces are a base_url, a file_size and a file_path.
 */
export const makeImageUri = ({
  imagePath,
  isFullSize = false,
}: MakeImageUriProps) => {
  return `https://image.tmdb.org/t/p/${
    isFullSize ? 'original' : 'w500'
  }/${imagePath}`;
};
