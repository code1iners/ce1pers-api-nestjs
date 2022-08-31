import { Module } from '@nestjs/common';
import { MoviesService } from '@/movies/movies.service';
import { MoviesResolver } from '@/movies/movies.resolver';
import { MovieProviderService } from '@/movies/services/providers/movies-providers.service';

@Module({
  providers: [MoviesResolver, MoviesService, MovieProviderService],
})
export class MoviesModule {}
