import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { OutputError, failure } from 'src/helpers/error-helpers';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput, LoginOutput } from 'src/auth/dtos/login-member.dto';
import {
  VerifyTokenInput,
  VerifyTokenOutput,
  VerifyRefreshTokenInput,
  VerifyRefreshTokenOutput,
} from 'src/auth/dtos/verify-token.dto';
import { LogoutInput, LogoutOutput } from 'src/auth/dtos/logout-member.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async loginMember(input: LoginInput): Promise<LoginOutput> {
    try {
      const { email, password } = input;

      // Find member by email.
      const foundMember = await this.prismaService.member.findUnique({
        where: { email },
      });
      if (!foundMember)
        throw new OutputError('Does not found the member', 'E02');

      // Verify password.
      let isPasswordValid = false;
      try {
        isPasswordValid = await compare(password, foundMember.password);
      } catch (err) {
        throw new OutputError(err.message, 'E03');
      }
      if (!isPasswordValid) throw new OutputError('Invalid password', 'E04');

      // Create access/refresh tokens.
      const { accessToken, refreshToken } = this.jwtService.sign(
        foundMember.id,
      );

      // Save refresh token by member's id.
      // const isCreatedJwtToken = await this.jwtService.saveRefreshToken(
      //   foundMember.id,
      //   refreshToken,
      // );
      // if (!isCreatedJwtToken) {
      //   throw new OutputError('Failed to save the refresh token', 'E05');
      // }

      return {
        ok: true,
        // data: {
        // authorizations: { accessToken, refreshToken },
        // member: { ...foundMember },
        // },
      };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async logoutMember(input: LogoutInput): Promise<LogoutOutput> {
    try {
      const { id } = input;
      // await this.prismaService.jwtToken.deleteMany({ where: { memberId: id } });
      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async verifyToken(input: VerifyTokenInput): Promise<VerifyTokenOutput> {
    try {
      const [type, value] = input.token.split(' ');
      type;

      try {
        const verified = this.jwtService.verify(value) as any;
        const foundMember = await this.prismaService.member.findUnique({
          where: { id: verified.id },
        });
        if (!foundMember) return failure('Does not found member.', 'E02');
      } catch (err) {
        return failure('Failed to verify the access token.', 'E03');
      }

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }

  async verifyRefreshToken(
    input: VerifyRefreshTokenInput,
  ): Promise<VerifyRefreshTokenOutput> {
    try {
      const [accessTokenType, accessTokenValue] = input.accessToken.split(' ');
      const [refreshTokenType, refreshTokenValue] =
        input.refreshToken.split(' ');

      const decoded = this.jwtService.decode(accessTokenValue);

      try {
        this.jwtService.verify(refreshTokenValue);
      } catch (err) {
        throw new OutputError('The refresh token is expired.', 'E02');
      }

      if (typeof decoded !== 'object' || !decoded.hasOwnProperty('id')) {
        throw new OutputError('Failed decode access token.', 'E03');
      }

      // Re-sign tokens.
      const { accessToken, refreshToken } = this.jwtService.sign(decoded.id);

      // await this.jwtService.saveRefreshToken(decoded.id, refreshToken);

      return { ok: true, data: { accessToken, refreshToken } };
    } catch (err) {
      return failure(err.message, 'E01');
    }
  }
}
