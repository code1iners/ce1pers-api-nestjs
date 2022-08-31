import { Injectable } from '@nestjs/common';
import { MovieProviderService } from '@/movies/services/providers/movies-providers.service';

@Injectable()
export class MoviesService {
  providers: MovieProviderService = null;

  constructor(private readonly providerService: MovieProviderService) {
    this.providers = providerService;
  }
}
