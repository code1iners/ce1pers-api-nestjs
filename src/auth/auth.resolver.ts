import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from 'src/auth/dtos/login-member.dto';
import { AuthService } from 'src/auth/auth.service';
import {
  VerifyTokenInput,
  VerifyTokenOutput,
} from 'src/auth/dtos/verify-token.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  async login(@Args('input') input: LoginInput): Promise<LoginOutput> {
    return this.authService.loginMember(input);
  }

  @Mutation(() => VerifyTokenOutput)
  async verifyRefreshToken(
    @Args('input') input: VerifyTokenInput,
  ): Promise<VerifyTokenOutput> {
    return this.authService.verifyRefreshToken(input);
  }
}
