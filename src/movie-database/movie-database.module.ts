import { Module } from '@nestjs/common';
import { MoviesResolver } from '@/movie-database/resolvers/movies.resolver';
import { TvShowResolver } from '@/movie-database/resolvers/tv-shows.resolver';
import { MovieProviderService } from '@/movie-database/services/watch-providers.service';
import { TrendingsService } from '@/movie-database/services/trendings.service';
import { MoviesService } from '@/movie-database/services/movies.service';
import { TvShowsService } from '@/movie-database/services/tv-shows.service';
import { TrendingsResolver } from '@/movie-database/resolvers/trendings.resolver';
import { WatchProvidersResolver } from '@/movie-database/resolvers/watch-providers.resolver';
import { MovieDatabaseCommonResolver } from '@/movie-database/resolvers/common.resolver';
import { MovieDatabaseCommonService } from '@/movie-database/services/common.service';

@Module({
  providers: [
    MovieDatabaseCommonResolver,
    MovieDatabaseCommonService,
    MoviesResolver,
    MoviesService,
    TvShowResolver,
    TvShowsService,
    TrendingsResolver,
    TrendingsService,
    WatchProvidersResolver,
    MovieProviderService,
  ],
})
export class MovieDatabaseModule {}
