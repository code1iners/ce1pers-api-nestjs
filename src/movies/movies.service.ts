import { Injectable } from '@nestjs/common';
import { MovieProviderService } from '@/movies/services/watch-providers.service';
import { MovieTrendingService } from '@/movies/services/trending-movies.service';
import { MovieContentService } from '@/movies/services/movie-content.service';
import { TvContentService } from '@/movies/services/tv-content.service';

@Injectable()
export class MoviesService {
  providers: MovieProviderService;
  trendings: MovieTrendingService;
  movies: MovieContentService;
  tv: TvContentService;

  constructor(
    private readonly providerService: MovieProviderService,
    private readonly trendingService: MovieTrendingService,
    private readonly movieContentService: MovieContentService,
    private readonly tvContentService: TvContentService,
  ) {
    this.providers = providerService;
    this.trendings = trendingService;
    this.movies = movieContentService;
    this.tv = tvContentService;
  }
}
