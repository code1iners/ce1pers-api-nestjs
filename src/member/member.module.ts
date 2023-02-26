import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MemberService, MemberResolver],
})
export class MemberModule {}
