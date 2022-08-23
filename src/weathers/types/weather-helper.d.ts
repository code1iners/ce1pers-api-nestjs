import { ConfigService } from '@nestjs/config';
import type { StringifiableRecord } from 'query-string';

export interface MakeWithQueryStringProps {
  configService: ConfigService;
  path: string;
  queries?: StringifiableRecord;
}
