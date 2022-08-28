import { ConfigService } from '@nestjs/config';
import type { StringifiableRecord } from 'query-string';

export interface MakeWithQueryStringProps {
  configService: ConfigService;
  path: string;
  queries?: StringifiableRecord;
}

export interface MakeWeatherForecastRequestProps {
  qList?: string[];
  query: object;
  path: string;
  configService: ConfigService;
}

interface ConvertWeatherForecastListIconsProps {
  forecast: FiveDayWeatherForecastResponse;
}
