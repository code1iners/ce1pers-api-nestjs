import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { MembersService } from '@/members/members.service';

@Injectable()
export class AuthMiddleWare implements NestMiddleware {
  constructor(
    private readonly authService: AuthService,
    private readonly membersService: MembersService,
  ) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    if ('authorization' in req.headers) {
      // Extract access token
      const [_, accessToken] = req.headers.authorization.split(' ');
      // Decode token
      const decoded = this.authService.verify(accessToken);

      // Extract user id from decoded token.
      if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
        try {
          // Find member by decoded member id.
          const { ok, member, error } = await this.membersService.findMember({
            id: decoded.id,
          });
          // There is a error?
          if (!ok) throw new Error(error);

          // Apply member into request.
          req['member'] = member;
        } catch (error) {
          console.error('[AUthMiddleWare]', error);
        }
      }
    }
    next();
  }
}
