import got, { CancelableRequest } from 'got';
import * as qs from 'query-string';
import {
  ConvertWeatherForecastListIconsProps,
  MakeWeatherForecastRequestProps,
  MakeWithQueryStringProps,
} from '@/weathers/types/weather-helper';
import { FiveDayWeatherForecastData } from '@/weathers/types/five-day-weather.type';

/**
 * Making weather url with query string.
 */
export const makeUrlWithQueryString = ({
  configService,
  path,
  queries,
}: MakeWithQueryStringProps) => {
  const origin = configService.get('OPEN_WEATHER_ORIGIN');
  const appId = configService.get('OPEN_WEATHER_API_KEY');
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
export const makeQueryParameter = (items: string[] = []) =>
  items.filter((isExist) => !!isExist).join(',');

/**
 * Convert weather icon.
 */
export const convertWeatherIcon = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

/**
 * Make weather forecast request.
 */
export const makeWeatherForecastRequest = ({
  qList,
  query,
  path,
  configService,
}: MakeWeatherForecastRequestProps): CancelableRequest => {
  const q = makeQueryParameter(qList);

  // Make url.
  const url = makeUrlWithQueryString({
    configService,
    path,
    queries: {
      ...(q && { q }),
      ...query,
    },
  });

  // Create request.
  return got.get(url);
};

export const convertWeatherForecastListIcons = ({
  forecast,
}: ConvertWeatherForecastListIconsProps): FiveDayWeatherForecastData[] => {
  return forecast.list.map((item) => {
    // Convert weather as icon url.
    const weather = item.weather.map((w) => ({
      ...w,
      icon: convertWeatherIcon(w.icon),
    }));

    return {
      ...item,
      weather,
    };
  });
};
