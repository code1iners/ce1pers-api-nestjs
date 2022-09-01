import { Args, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from '@/movies/movies.service';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movies/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchMovieProvidersInput,
  FetchMovieProvidersOutput,
} from '@/movies/dtos/watch-providers/fetch-movie-providers.dto';

@Resolver()
export class MoviesResolver {
  constructor(private readonly movieService: MoviesService) {}

  @Query(() => FetchAvailableRegionsOutput)
  async availableRegions(
    @Args('input') input: FetchAvailableRegionsInput,
  ): Promise<FetchAvailableRegionsOutput> {
    return this.movieService.providers.fetchAvailableRegions(input);
  }

  @Query(() => FetchMovieProvidersOutput)
  async movieProviders(
    @Args('input') input: FetchMovieProvidersInput,
  ): Promise<FetchMovieProvidersOutput> {
    return this.movieService.providers.fetchMovieProviders(input);
  }
}
