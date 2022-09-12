import { Args, Query, Resolver } from '@nestjs/graphql';
import { TvShowsService } from '@/movie-database/services/tv-shows.service';
import {
  FetchLatestTvInput,
  FetchLatestTvOutput,
} from '@/movie-database/dtos/tv-shows/fetch-latest-tv.dto';
import {
  FetchPopularTvListInput,
  FetchPopularTvListOutput,
} from '@/movie-database/dtos/tv-shows/fetch-popular-tv.dto';
import {
  FetchTopRatedTvListInput,
  FetchTopRatedTvListOutput,
} from '@/movie-database/dtos/tv-shows/fetch-top-rated-tv.dto';
import {
  FetchTvOnTheAirListInput,
  FetchTvOnTheAirListOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-on-the-air.dto';
import {
  FetchTvWatchProvidersInput,
  FetchTvWatchProvidersOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-watch-providers.dto';
import {
  FetchTvVideosInput,
  FetchTvVideosOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-videos.dto';
import {
  FetchTvTranslationsInput,
  FetchTvTranslationsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-translation.dto';
import {
  FetchSimilarTvShowsInput,
  FetchSimilarTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-similar-tv-shows.dto';
import {
  FetchTvReviewsInput,
  FetchTvReviewsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-reviews.dto';
import {
  FetchRecommendationTvShowsInput,
  FetchRecommendationTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-recommendation-tv-shows.dto';
import {
  FetchTvKeywordsInput,
  FetchTvKeywordsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-keywords.dto';
import {
  FetchTvShowCreditsInput,
  FetchTvShowCreditsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-credits.dto';
import {
  FetchTvShowContentRatingsInput,
  FetchTvShowContentRatingsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-content-ratings.dto';
import {
  FetchTvShowAlternativeTitlesInput,
  FetchTvShowAlternativeTitlesOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-alternative-titles.dto';
import {
  FetchTvShowDetailsInput,
  FetchTvShowDetailsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-details.dto';
import {
  FetchTvShowGenreListInput,
  FetchTvShowGenreListOutput,
} from '../dtos/tv-shows/fetch-tv-genre-list.dto';

@Resolver()
export class TvShowResolver {
  constructor(private readonly tvShowsService: TvShowsService) {}

  // Tv content start.
  @Query(() => FetchLatestTvOutput)
  async latestTv(
    @Args('input') input: FetchLatestTvInput,
  ): Promise<FetchLatestTvOutput> {
    return this.tvShowsService.fetchLatestTv(input);
  }

  @Query(() => FetchPopularTvListOutput)
  async popularTvList(
    @Args('input') input: FetchPopularTvListInput,
  ): Promise<FetchPopularTvListOutput> {
    return this.tvShowsService.fetchPopularTvList(input);
  }

  @Query(() => FetchTopRatedTvListOutput)
  async topRatedTvList(
    @Args('input') input: FetchTopRatedTvListInput,
  ): Promise<FetchTopRatedTvListOutput> {
    return this.tvShowsService.fetchTopRatedTvList(input);
  }

  @Query(() => FetchTvOnTheAirListOutput)
  async tvOnTheAirList(
    @Args('input') input: FetchTvOnTheAirListInput,
  ): Promise<FetchTvOnTheAirListOutput> {
    return this.tvShowsService.fetchTvOnTheAirList(input);
  }

  @Query(() => FetchTvWatchProvidersOutput)
  async tvWatchProviders(
    @Args('input') input: FetchTvWatchProvidersInput,
  ): Promise<FetchTvWatchProvidersOutput> {
    return this.tvShowsService.fetchTvWatchProvidersById(input);
  }

  @Query(() => FetchTvVideosOutput)
  async tvVideos(
    @Args('input') input: FetchTvVideosInput,
  ): Promise<FetchTvVideosOutput> {
    return this.tvShowsService.fetchTvVideosById(input);
  }

  @Query(() => FetchTvTranslationsOutput)
  async tvTranslations(
    @Args('input') input: FetchTvTranslationsInput,
  ): Promise<FetchTvTranslationsOutput> {
    return this.tvShowsService.fetchTvTranslationsById(input);
  }

  @Query(() => FetchSimilarTvShowsOutput)
  async similarTvShows(
    @Args('input') input: FetchSimilarTvShowsInput,
  ): Promise<FetchSimilarTvShowsOutput> {
    return this.tvShowsService.fetchSimilarTvShowsById(input);
  }

  @Query(() => FetchTvReviewsOutput)
  async tvReviews(
    @Args('input') input: FetchTvReviewsInput,
  ): Promise<FetchTvReviewsOutput> {
    return this.tvShowsService.fetchTvReviewsById(input);
  }

  @Query(() => FetchRecommendationTvShowsOutput)
  async recommendationTvShows(
    @Args('input') input: FetchRecommendationTvShowsInput,
  ): Promise<FetchRecommendationTvShowsOutput> {
    return this.tvShowsService.fetchRecommendationTvShowsById(input);
  }

  @Query(() => FetchTvKeywordsOutput)
  async tvKeywords(
    @Args('input') input: FetchTvKeywordsInput,
  ): Promise<FetchTvKeywordsOutput> {
    return this.tvShowsService.fetchTvKeywordsById(input);
  }

  @Query(() => FetchTvShowCreditsOutput)
  async tvShowCredits(
    @Args('input') input: FetchTvShowCreditsInput,
  ): Promise<FetchTvShowCreditsOutput> {
    return this.tvShowsService.fetchTvShowCreditsById(input);
  }

  @Query(() => FetchTvShowContentRatingsOutput)
  async tvShowContentRatings(
    @Args('input') input: FetchTvShowContentRatingsInput,
  ): Promise<FetchTvShowContentRatingsOutput> {
    return this.tvShowsService.fetchTvShowContentRatingsById(input);
  }

  @Query(() => FetchTvShowAlternativeTitlesOutput)
  async tvShowAlternativeTitles(
    @Args('input') input: FetchTvShowAlternativeTitlesInput,
  ): Promise<FetchTvShowAlternativeTitlesOutput> {
    return this.tvShowsService.fetchTvShowAlternativeTitlesById(input);
  }

  @Query(() => FetchTvShowDetailsOutput)
  async tvShowDetails(
    @Args('input') input: FetchTvShowDetailsInput,
  ): Promise<FetchTvShowDetailsOutput> {
    return this.tvShowsService.fetchTvShowDetailsById(input);
  }

  @Query(() => FetchTvShowGenreListOutput)
  async tvShowGenreList(
    @Args('input') input: FetchTvShowGenreListInput,
  ): Promise<FetchTvShowGenreListOutput> {
    return this.tvShowsService.fetchTvShowGenreList(input);
  }
}
