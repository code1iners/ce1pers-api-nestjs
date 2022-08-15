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
      const [tokenType, accessToken] = req.headers.authorization.split(' ');
      // Decode token
      const decoded = this.authService.verify(accessToken);

      // Extract user id from decoded token.
      if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
        try {
          const member = await this.membersService.findMember({
            id: decoded.id,
          });
          console.log(member);
          req['member'] = member;
        } catch (error) {
          console.error('[AUthMiddleWare]', error);
        }
      }
    }
    next();
  }
}
