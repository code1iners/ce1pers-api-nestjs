import { Injectable } from '@nestjs/common';
import { MovieProviderService } from '@/movies/services/providers/movies-providers.service';
import { MovieTrendingService } from '@/movies/services/trendings/movies-trendings.service';

@Injectable()
export class MoviesService {
  providers: MovieProviderService = null;
  trendings: MovieTrendingService = null;

  constructor(
    private readonly providerService: MovieProviderService,
    private readonly trendingService: MovieTrendingService,
  ) {
    this.providers = providerService;
    this.trendings = trendingService;
  }
}
