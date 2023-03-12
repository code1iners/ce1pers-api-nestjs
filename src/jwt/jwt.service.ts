import { Inject, Injectable } from '@nestjs/common';
import { sign, verify, decode } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModuleOptions } from 'src/jwt/jwt.module';
import { JwtConstants } from 'src/jwt/jwt.constants';

interface SignInput {
  memberId: number;
  profileId: number;
}

@Injectable()
export class JwtService {
  constructor(
    @Inject(JwtConstants.CONFIG_OPTIONS)
    private readonly options: JwtModuleOptions,
    private readonly prismaService: PrismaService,
  ) {}

  sign(input: SignInput) {
    const accessToken = sign(input, this.options.privateKey, {
      expiresIn: '1d',
    });
    const refreshToken = sign({}, this.options.privateKey, {
      expiresIn: '14d',
    });
    return { accessToken, refreshToken };
  }

  verify(token: string) {
    return verify(token, this.options.privateKey);
  }

  decode(token: string) {
    return decode(token);
  }
}
