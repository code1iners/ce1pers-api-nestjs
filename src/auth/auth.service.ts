import { Inject, Injectable } from '@nestjs/common';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { AUTH_OPTIONS } from '@/auth/constants';
import { AuthModuleOptions } from '@/auth/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AUTH_OPTIONS) private readonly options: AuthModuleOptions,
  ) {}

  sign(payload: object): string | null {
    try {
      return sign(payload, this.options.privateKey);
    } catch (error) {
      console.error('[sign]', error);
      return null;
    }
  }

  verify(token: string): string | JwtPayload | null {
    try {
      return verify(token, this.options.privateKey);
    } catch (error) {
      console.error('[verify]', error);
      return '';
    }
  }
}
