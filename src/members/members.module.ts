import { RepositoriesModule } from '@/repositories/repositories.module';
import { Module } from '@nestjs/common';
import { MembersResolver } from '@/members/members.resolver';
import { MembersService } from '@/members/members.service';
import { AuthService } from '@/auth/auth.service';

@Module({
  imports: [RepositoriesModule],
  providers: [MembersResolver, MembersService],
})
export class MembersModule {}
