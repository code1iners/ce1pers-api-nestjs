import * as qs from 'query-string';
import { MakeWithQueryStringProps } from '@/weathers/types/weather-helper';

/**
 * Making weather url with query string.
 */
export const makeUrlWithQueryString = ({
  configService,
  path,
  queries,
}: MakeWithQueryStringProps) => {
  const origin = configService.get('OPEN_WEATHER_ORIGIN');
  const appId = configService.get('OPEN_WEATHER_KEY');
  return qs.stringifyUrl({
    url: `${origin}${path}`,
    query: {
      appid: appId,
      ...queries,
    },
  });
};

/**
 * Make query parameter.
 */
export const makeQueryParameter = (items: string[]) =>
  items.filter((isExist) => !!isExist).join(',');

/**
 * Convert weather icon.
 */
export const convertWeatherIcon = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;
