import { Injectable } from '@nestjs/common';
import { MovieProviderService } from '@/movies/services/watch-providers/movies-providers.service';
import { MovieTrendingService } from '@/movies/services/trendings/movies-trendings.service';
import { MovieContentService } from '@/movies/services/movie-contents/movie-content.services';

@Injectable()
export class MoviesService {
  providers: MovieProviderService;
  trendings: MovieTrendingService;
  movies: MovieContentService;

  constructor(
    private readonly providerService: MovieProviderService,
    private readonly trendingService: MovieTrendingService,
    private readonly movieContentService: MovieContentService,
  ) {
    this.providers = providerService;
    this.trendings = trendingService;
    this.movies = movieContentService;
  }
}
