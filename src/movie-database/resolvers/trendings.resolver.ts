import { Args, Query, Resolver } from '@nestjs/graphql';
import { TrendingsService } from '@/movie-database/services/trendings.service';
import {
  FetchTrendingsInput,
  FetchTrendingsOutput,
} from '@/movie-database/dtos/trendings/fetch-trendings.dto';

@Resolver()
export class TrendingsResolver {
  constructor(private readonly trendingsService: TrendingsService) {}

  @Query(() => FetchTrendingsOutput)
  async trendingMovies(
    @Args('input') input: FetchTrendingsInput,
  ): Promise<FetchTrendingsOutput> {
    return this.trendingsService.fetchTrendingMovies(input);
  }
}
