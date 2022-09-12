import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { movieDatabaseFetcher } from '@/movie-database/helpers/movies-helper';
import {
  FetchTvWatchProvidersInput,
  FetchTvWatchProvidersOutput,
  FetchTvWatchProvidersResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-watch-providers.dto';
import {
  FetchLatestTvInput,
  FetchLatestTvOutput,
  FetchLatestTvResponse,
} from '@/movie-database/dtos/tv-shows/fetch-latest-tv.dto';
import {
  FetchPopularTvListInput,
  FetchPopularTvListOutput,
  FetchPopularTvListResponse,
} from '@/movie-database/dtos/tv-shows/fetch-popular-tv.dto';
import {
  FetchTopRatedTvListInput,
  FetchTopRatedTvListOutput,
} from '@/movie-database/dtos/tv-shows/fetch-top-rated-tv.dto';
import {
  FetchTvOnTheAirListInput,
  FetchTvOnTheAirListOutput,
  FetchTvOnTheAirListResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-on-the-air.dto';
import {
  FetchTvVideosInput,
  FetchTvVideosOutput,
  FetchTvVideosResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-videos.dto';
import {
  FetchTvTranslationsInput,
  FetchTvTranslationsOutput,
  FetchTvTranslationsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-translation.dto';
import {
  FetchSimilarTvShowsInput,
  FetchSimilarTvShowsOutput,
  FetchSimilarTvShowsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-similar-tv-shows.dto';
import {
  FetchTvReviewsInput,
  FetchTvReviewsOutput,
  FetchTvReviewsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-reviews.dto';
import {
  FetchRecommendationTvShowsInput,
  FetchRecommendationTvShowsOutput,
  FetchRecommendationTvShowsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-recommendation-tv-shows.dto';
import {
  FetchTvKeywordsInput,
  FetchTvKeywordsOutput,
  FetchTvKeywordsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-keywords.dto';
import {
  FetchTvShowCreditsInput,
  FetchTvShowCreditsOutput,
  FetchTvShowCreditsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-credits.dto';
import {
  FetchTvShowContentRatingsInput,
  FetchTvShowContentRatingsOutput,
  FetchTvShowContentRatingsResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-content-ratings.dto';
import {
  FetchTvShowAlternativeTitlesInput,
  FetchTvShowAlternativeTitlesOutput,
  FetchTvShowAlternativeTitlesResponse,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-alternative-titles.dto';
import {
  FetchTvShowDetailsAppendToResponse,
  FetchTvShowDetailsInput,
  FetchTvShowDetailsOutput,
} from '@/movie-database/dtos/tv-shows/fetch-tv-show-details.dto';

@Injectable()
export class TvShowsService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   */
  async fetchLatestTv({
    language,
  }: FetchLatestTvInput): Promise<FetchLatestTvOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchLatestTvResponse>({
        configService: this.configService,
        path: `/tv/latest`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchLatestTv]', err);
      return {
        ok: false,
        error: 'Failed fetch latest tv.',
      };
    }
  }

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   */
  async fetchPopularTvList({
    page,
    language,
  }: FetchPopularTvListInput): Promise<FetchPopularTvListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchPopularTvListResponse>({
        configService: this.configService,
        path: `/tv/popular`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchPopularTvList]', err);
      return {
        ok: false,
        error: 'Failed fetch popular tv list.',
      };
    }
  }

  /**
   * Get a list of the top rated TV shows on TMDB.
   */
  async fetchTopRatedTvList({
    page,
    language,
  }: FetchTopRatedTvListInput): Promise<FetchTopRatedTvListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchPopularTvListResponse>({
        configService: this.configService,
        path: `/tv/top_rated`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTopRatedTvList]', err);
      return {
        ok: false,
        error: 'Failed fetch top rated tv list.',
      };
    }
  }

  /**
   * Get a list of shows that are currently on the air.
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   */
  async fetchTvOnTheAirList({
    page,
    language,
  }: FetchTvOnTheAirListInput): Promise<FetchTvOnTheAirListOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvOnTheAirListResponse>({
        configService: this.configService,
        path: `/tv/on_the_air`,
        queries: { page, language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvOnTheAirList]', err);
      return {
        ok: false,
        error: 'Failed fetch tv on the air list.',
      };
    }
  }

  /**
   * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
   * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
   * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
   * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
   */
  async fetchTvWatchProvidersById({
    tvId,
  }: FetchTvWatchProvidersInput): Promise<FetchTvWatchProvidersOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvWatchProvidersResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/watch/providers`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvWatchProvidersById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv watch providers by ID.',
      };
    }
  }

  /**
   * Get the videos that have been added to a TV show.
   */
  async fetchTvVideosById({
    tvId,
    language,
  }: FetchTvVideosInput): Promise<FetchTvVideosOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvVideosResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/videos`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvVideosById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv videos by ID.',
      };
    }
  }

  /**
   * Get a list of the translations that exist for a TV show.
   */
  async fetchTvTranslationsById({
    tvId,
  }: FetchTvTranslationsInput): Promise<FetchTvTranslationsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvTranslationsResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/translations`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvTranslationsById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv translations by ID.',
      };
    }
  }

  /**
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   */
  async fetchSimilarTvShowsById({
    tvId,
    language,
  }: FetchSimilarTvShowsInput): Promise<FetchSimilarTvShowsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchSimilarTvShowsResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/similar`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchSimilarTvShowsById]', err);
      return {
        ok: false,
        error: 'Failed fetch similar tv shows by ID.',
      };
    }
  }

  /**
   * Get the reviews for a TV show.
   */
  async fetchTvReviewsById({
    tvId,
    language,
  }: FetchTvReviewsInput): Promise<FetchTvReviewsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvReviewsResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/reviews`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvReviewsById]', err);
      return {
        ok: false,
        error: 'Fetch tv reviews by ID.',
      };
    }
  }

  /**
   * Get the list of TV show recommendations for this item.
   */
  async fetchRecommendationTvShowsById({
    tvId,
    language,
    page,
  }: FetchRecommendationTvShowsInput): Promise<FetchRecommendationTvShowsOutput> {
    try {
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchRecommendationTvShowsResponse>({
          configService: this.configService,
          path: `/tv/${tvId}/recommendations`,
          queries: { language, page },
        });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchRecommendationTvShowsById]', err);
      return {
        ok: false,
        error: 'Failed fetch recommendation tv shows by ID.',
      };
    }
  }

  /**
   * Get the keywords that have been added to a TV show.
   */
  async fetchTvKeywordsById({
    tvId,
  }: FetchTvKeywordsInput): Promise<FetchTvKeywordsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvKeywordsResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/keywords`,
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvKeywordsById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv keywords by ID.',
      };
    }
  }

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   */
  async fetchTvShowCreditsById({
    tvId,
    language,
  }: FetchTvShowCreditsInput): Promise<FetchTvShowCreditsOutput> {
    try {
      // Data fetching.
      const data = await movieDatabaseFetcher<FetchTvShowCreditsResponse>({
        configService: this.configService,
        path: `/tv/${tvId}/credits`,
        queries: { language },
      });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvShowCreditsById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv show credits by ID.',
      };
    }
  }

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   */
  async fetchTvShowContentRatingsById({
    tvId,
    language,
  }: FetchTvShowContentRatingsInput): Promise<FetchTvShowContentRatingsOutput> {
    try {
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchTvShowContentRatingsResponse>({
          configService: this.configService,
          path: `/tv/${tvId}/content_ratings`,
          queries: { language },
        });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvShowContentRatingsById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv show content ratings by ID.',
      };
    }
  }

  /**
   * Returns all of the alternative titles for a TV show.
   */
  async fetchTvShowAlternativeTitlesById({
    tvId,
    language,
  }: FetchTvShowAlternativeTitlesInput): Promise<FetchTvShowAlternativeTitlesOutput> {
    try {
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchTvShowAlternativeTitlesResponse>({
          configService: this.configService,
          path: `/tv/${tvId}/alternative_titles`,
          queries: { language },
        });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvShowAlternativeTitlesById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv show alternative titles by ID.',
      };
    }
  }

  /**
   * Get the primary TV show details by id.
   */
  async fetchTvShowDetailsById({
    tvId,
    language,
    appendToResponse,
  }: FetchTvShowDetailsInput): Promise<FetchTvShowDetailsOutput> {
    try {
      // Data fetching.
      const data =
        await movieDatabaseFetcher<FetchTvShowDetailsAppendToResponse>({
          configService: this.configService,
          path: `/tv/${tvId}`,
          queries: { language, append_to_response: appendToResponse },
        });

      return {
        ok: true,
        data,
      };
    } catch (err) {
      console.error('[fetchTvShowDetailsById]', err);
      return {
        ok: false,
        error: 'Failed fetch tv show details by ID.',
      };
    }
  }
}
