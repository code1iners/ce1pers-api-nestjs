import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from 'src/auth/dtos/login-member.dto';
import { AuthService } from 'src/auth/auth.service';
import { LogoutInput, LogoutOutput } from 'src/auth/dtos/logout-member.dto';
import { ServiceKind, ServiceKindObject } from './auth.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  async login(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: LoginInput,
  ): Promise<LoginOutput> {
    return this.authService.loginMember(serviceKind, input);
  }

  @Mutation(() => LogoutOutput)
  async logout(
    @ServiceKind() serviceKind: ServiceKindObject,
    @Args('input') input: LogoutInput,
  ): Promise<LogoutOutput> {
    return this.authService.logoutMember(serviceKind, input);
  }
}
