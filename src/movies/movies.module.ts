import { Module } from '@nestjs/common';
import { MoviesService } from '@/movies/movies.service';
import { MoviesResolver } from '@/movies/movies.resolver';
import { MovieProviderService } from '@/movies/services/watch-providers.service';
import { MovieTrendingService } from '@/movies/services/trending-movies.service';
import { MovieContentService } from '@/movies/services/movie-content.service';
import { TvContentService } from '@/movies/services/tv-content.service';

@Module({
  providers: [
    MoviesResolver,
    MoviesService,
    MovieProviderService,
    MovieTrendingService,
    MovieContentService,
    TvContentService,
  ],
})
export class MoviesModule {}
