import { Args, Query, Resolver } from '@nestjs/graphql';
import { TvShowsService } from '@/movie-database/services/tv-shows.service';
import {
  FetchLatestTvShowInput,
  FetchLatestTvShowOutput,
} from '@/movie-database/dtos/tv-shows/fetch-latest-tv-show.dto';
import {
  FetchPopularTvShowsInput,
  FetchPopularTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-popular-tv-shows.dto';
import {
  FetchTopRatedTvShowsInput,
  FetchTopRatedTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-top-rated-tv-shows.dto';
import {
  FetchOnTheAirTvShowsInput,
  FetchOnTheAirTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-on-the-air-tv-shows.dto';
import {
  FetchTvShowWatchProvidersInput,
  FetchTvShowWatchProvidersOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-watch-providers.dto';
import {
  FetchTvShowVideosInput,
  FetchTvShowVideosOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-videos.dto';
import {
  FetchTvShowTranslationsInput,
  FetchTvShowTranslationsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-translation.dto';
import {
  FetchSimilarTvShowsInput,
  FetchSimilarTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-similar-tv-shows.dto';
import {
  FetchTvShowReviewsInput,
  FetchTvShowReviewsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-reviews.dto';
import {
  FetchRecommendationTvShowsInput,
  FetchRecommendationTvShowsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-recommendation-tv-shows.dto';
import {
  FetchTvShowKeywordsInput,
  FetchTvShowKeywordsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-keywords.dto';
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
} from '../dtos/tv-shows/fetch-tv-show-genre-list.dto';

@Resolver()
export class TvShowResolver {
  constructor(private readonly tvShowsService: TvShowsService) {}

  // Tv content start.
  @Query(() => FetchLatestTvShowOutput)
  async latestTv(
    @Args('input') input: FetchLatestTvShowInput,
  ): Promise<FetchLatestTvShowOutput> {
    return this.tvShowsService.fetchLatestTv(input);
  }

  @Query(() => FetchPopularTvShowsOutput)
  async popularTvList(
    @Args('input') input: FetchPopularTvShowsInput,
  ): Promise<FetchPopularTvShowsOutput> {
    return this.tvShowsService.fetchPopularTvList(input);
  }

  @Query(() => FetchTopRatedTvShowsOutput)
  async topRatedTvList(
    @Args('input') input: FetchTopRatedTvShowsInput,
  ): Promise<FetchTopRatedTvShowsOutput> {
    return this.tvShowsService.fetchTopRatedTvList(input);
  }

  @Query(() => FetchOnTheAirTvShowsOutput)
  async tvOnTheAirList(
    @Args('input') input: FetchOnTheAirTvShowsInput,
  ): Promise<FetchOnTheAirTvShowsOutput> {
    return this.tvShowsService.fetchTvOnTheAirList(input);
  }

  @Query(() => FetchTvShowWatchProvidersOutput)
  async tvWatchProviders(
    @Args('input') input: FetchTvShowWatchProvidersInput,
  ): Promise<FetchTvShowWatchProvidersOutput> {
    return this.tvShowsService.fetchTvWatchProvidersById(input);
  }

  @Query(() => FetchTvShowVideosOutput)
  async tvVideos(
    @Args('input') input: FetchTvShowVideosInput,
  ): Promise<FetchTvShowVideosOutput> {
    return this.tvShowsService.fetchTvVideosById(input);
  }

  @Query(() => FetchTvShowTranslationsOutput)
  async tvTranslations(
    @Args('input') input: FetchTvShowTranslationsInput,
  ): Promise<FetchTvShowTranslationsOutput> {
    return this.tvShowsService.fetchTvTranslationsById(input);
  }

  @Query(() => FetchSimilarTvShowsOutput)
  async similarTvShows(
    @Args('input') input: FetchSimilarTvShowsInput,
  ): Promise<FetchSimilarTvShowsOutput> {
    return this.tvShowsService.fetchSimilarTvShowsById(input);
  }

  @Query(() => FetchTvShowReviewsOutput)
  async tvReviews(
    @Args('input') input: FetchTvShowReviewsInput,
  ): Promise<FetchTvShowReviewsOutput> {
    return this.tvShowsService.fetchTvReviewsById(input);
  }

  @Query(() => FetchRecommendationTvShowsOutput)
  async recommendationTvShows(
    @Args('input') input: FetchRecommendationTvShowsInput,
  ): Promise<FetchRecommendationTvShowsOutput> {
    return this.tvShowsService.fetchRecommendationTvShowsById(input);
  }

  @Query(() => FetchTvShowKeywordsOutput)
  async tvKeywords(
    @Args('input') input: FetchTvShowKeywordsInput,
  ): Promise<FetchTvShowKeywordsOutput> {
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
