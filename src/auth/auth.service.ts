import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { failure } from 'src/helpers/error-helpers';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput, LoginOutput } from 'src/auth/dtos/login-member.dto';
import { LogoutInput, LogoutOutput } from 'src/auth/dtos/logout-member.dto';
import { ServiceKindObject } from './auth.decorator';
import { findMemberFragment } from 'src/member/dtos/find-member.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async loginMember(
    serviceKind: ServiceKindObject,
    input: LoginInput,
  ): Promise<LoginOutput> {
    try {
      const { email, password } = input;

      // Find member by email.
      const foundMember = await this.prismaService.member.findFirst({
        where: {
          AND: [
            { email },
            {
              profiles: {
                some: { service: { serviceCode: serviceKind.serviceCode } },
              },
            },
          ],
        },
        select: {
          password: true,
          profiles: {
            select: {
              ...findMemberFragment,
              service: { select: { serviceCode: true } },
            },
          },
        },
      });
      if (!foundMember) {
        return failure('Does not found the member.', 'loginMember:foundMember');
      }

      // Verify password.
      try {
        const isPasswordValid = await compare(password, foundMember.password);
        if (!isPasswordValid) {
          return failure('Invalid password', 'loginMember:isPasswordValid');
        }
      } catch (err) {
        return failure(err.message, 'loginMember:compare');
      }

      if (!foundMember.profiles.length) {
        return failure(
          'Does not exist the member in the service.',
          'loginMember:foundMemberProfiles',
        );
      }

      const [foundProfile] = foundMember.profiles;

      // Create access/refresh tokens.
      const { accessToken, refreshToken } = this.jwtService.sign({
        memberId: foundProfile.id,
        profileId: foundProfile.id,
      });

      // Clear member's tokens.
      await this.prismaService.jwtToken.deleteMany({
        where: { profileId: foundProfile.id },
      });
      // Save member's tokens.
      await this.prismaService.jwtToken.create({
        data: {
          accessToken,
          refreshToken,
          profileId: foundProfile.id,
        },
      });

      return {
        ok: true,
        data: {
          authorizations: { accessToken, refreshToken },
          profile: foundProfile,
        },
      };
    } catch (err) {
      return failure(err.message, 'loginMember:catch');
    }
  }

  async logoutMember(
    serviceKind: ServiceKindObject,
    input: LogoutInput,
  ): Promise<LogoutOutput> {
    try {
      const { id } = input;
      // Find profile id by member id.
      const foundMemberProfile = await this.prismaService.profile.findFirst({
        where: {
          AND: [
            { memberId: id },
            { service: { serviceCode: serviceKind.serviceCode } },
          ],
        },
        select: { id: true },
      });

      if (!foundMemberProfile) {
        return failure(
          'Does not found the member profile.',
          'logoutMember:foundMemberProfile',
        );
      }

      // Delete all tokens by profile id.
      await this.prismaService.jwtToken.deleteMany({
        where: { profileId: foundMemberProfile.id },
      });

      return { ok: true };
    } catch (err) {
      return failure(err.message, 'logoutMember:catch');
    }
  }
}
