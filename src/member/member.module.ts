import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MemberResolver } from 'src/member/member.resolver';
import { MemberService } from 'src/member/member.service';

@Module({
  imports: [PrismaModule],
  providers: [MemberService, MemberResolver],
  exports: [MemberService],
})
export class MemberModule {}
