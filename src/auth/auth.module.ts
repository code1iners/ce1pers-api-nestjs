import { DynamicModule, Global, Module } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { AuthModuleOptions } from '@/auth/interfaces';
import { AUTH_OPTIONS } from '@/auth/constants';
import { MembersModule } from '@/members/members.module';

@Module({
  imports: [MembersModule],
})
@Global()
export class AuthModule {
  static forRoot(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        {
          provide: AUTH_OPTIONS,
          useValue: options,
        },
        AuthService,
      ],
      exports: [AuthService],
    };
  }
}
