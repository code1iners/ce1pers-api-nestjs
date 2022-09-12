import { Injectable } from '@nestjs/common';
import {
  GetImageUrlInput,
  GetImageUrlOutput,
} from '@/movie-database/dtos/commons/get-image-url.dto';

@Injectable()
export class MovieDatabaseCommonService {
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
}
