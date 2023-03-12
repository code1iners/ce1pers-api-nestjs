import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from 'src/auth/dtos/login-member.dto';
import { AuthService } from 'src/auth/auth.service';
import {
  VerifyTokenInput,
  VerifyTokenOutput,
  VerifyRefreshTokenInput,
  VerifyRefreshTokenOutput,
} from 'src/auth/dtos/verify-token.dto';
import { LogoutInput, LogoutOutput } from 'src/auth/dtos/logout-member.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  async login(@Args('input') input: LoginInput): Promise<LoginOutput> {
    return this.authService.loginMember(input);
  }

  @Mutation(() => LogoutOutput)
  async logout(@Args('input') input: LogoutInput): Promise<LogoutOutput> {
    return this.authService.logoutMember(input);
  }

  @Mutation(() => VerifyTokenOutput)
  async verifyToken(
    @Args('input') input: VerifyTokenInput,
  ): Promise<VerifyTokenOutput> {
    return this.authService.verifyToken(input);
  }

  @Mutation(() => VerifyRefreshTokenOutput)
  async verifyRefreshToken(
    @Args('input') input: VerifyRefreshTokenInput,
  ): Promise<VerifyRefreshTokenOutput> {
    return this.authService.verifyRefreshToken(input);
  }
}
