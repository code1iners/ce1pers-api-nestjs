import { Module } from '@nestjs/common';
import { MoviesService } from '@/movies/movies.service';
import { MoviesResolver } from '@/movies/movies.resolver';
import { MovieProviderService } from '@/movies/services/providers/movies-providers.service';
import { MovieTrendingService } from '@/movies/services/trendings/movies-trendings.service';

@Module({
  providers: [
    MoviesResolver,
    MoviesService,
    MovieProviderService,
    MovieTrendingService,
  ],
})
export class MoviesModule {}
