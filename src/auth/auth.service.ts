import { Inject, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
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
}
