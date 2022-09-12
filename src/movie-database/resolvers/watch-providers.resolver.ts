import { Args, Query, Resolver } from '@nestjs/graphql';
import { MovieProviderService } from '@/movie-database/services/watch-providers.service';
import {
  FetchAvailableRegionsInput,
  FetchAvailableRegionsOutput,
} from '@/movie-database/dtos/watch-providers/fetch-available-regions.dto';
import {
  FetchContentProvidersInput,
  FetchContentProvidersOutput,
} from '@/movie-database/dtos/watch-providers/fetch-content-providers.dto';

@Resolver()
export class WatchProvidersResolver {
  constructor(private readonly providersService: MovieProviderService) {}

  @Query(() => FetchAvailableRegionsOutput)
  async availableRegions(
    @Args('input') input: FetchAvailableRegionsInput,
  ): Promise<FetchAvailableRegionsOutput> {
    return this.providersService.fetchAvailableRegions(input);
  }

  @Query(() => FetchContentProvidersOutput)
  async contentProviders(
    @Args('input') input: FetchContentProvidersInput,
  ): Promise<FetchContentProvidersOutput> {
    return this.providersService.fetchContentProviders(input);
  }
}
