import { Module } from '@nestjs/common';
import { AuthResolver } from 'src/auth/auth.resolver';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from 'src/jwt/jwt.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
