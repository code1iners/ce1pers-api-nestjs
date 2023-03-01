import { Inject, Injectable } from '@nestjs/common';
import { sign, verify, decode } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModuleOptions } from 'src/jwt/jwt.module';
import { JwtConstants } from 'src/jwt/jwt.constants';

@Injectable()
export class JwtService {
  constructor(
    @Inject(JwtConstants.CONFIG_OPTIONS)
    private readonly options: JwtModuleOptions,
    private readonly prismaService: PrismaService,
  ) {}

  sign(id: number) {
    const accessToken = sign({ id }, this.options.privateKey, {
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

  async saveRefreshToken(memberId: number, refreshToken: string) {
    try {
      await this.prismaService.jwtToken.delete({ where: { memberId } });
    } catch (err) {}

    try {
      await this.prismaService.jwtToken.create({
        data: { memberId, refreshToken },
      });
    } catch (err) {
      return false;
    }
    return true;
  }
}
