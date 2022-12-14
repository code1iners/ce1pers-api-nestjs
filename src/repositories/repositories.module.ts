import { Module } from '@nestjs/common';
import { RepositoriesService } from '@/repositories/repositories.service';

@Module({
  providers: [RepositoriesService],
  exports: [RepositoriesService],
})
export class RepositoriesModule {}
