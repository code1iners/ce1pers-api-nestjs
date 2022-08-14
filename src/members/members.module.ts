import { RepositoriesModule } from '@/repositories/repositories.module';
import { Module } from '@nestjs/common';
import { MembersResolver } from '@/members/members.resolver';
import { MembersService } from '@/members/members.service';

@Module({
  imports: [RepositoriesModule],
  providers: [MembersResolver, MembersService],
})
export class MembersModule {}
