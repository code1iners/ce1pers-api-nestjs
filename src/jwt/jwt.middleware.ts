import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from 'src/jwt/jwt.service';
import { MemberService } from 'src/member/member.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly memberService: MemberService,
    private readonly prismaService: PrismaService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if ('authorization' in req.headers) {
      const authorization = req.headers['authorization'] as string;
      const [tokenType, tokenValue] = authorization.split(' ');
      // Check access token validity.
      try {
        const verified = this.jwtService.verify(tokenValue);
        if (typeof verified === 'object' && verified.hasOwnProperty('id')) {
          const foundMember = await this.memberService.findMember({
            id: verified.id,
          });
          req['member'] = foundMember?.data?.member;
        }
      } catch (err) {}
    }

    next();
  }
}
