import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from 'src/jwt/jwt.service';
import { MemberService } from 'src/member/member.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly memberService: MemberService,
    private readonly prismaService: PrismaService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const serviceCode = req.headers['service-code'];
    const serviceName = req.headers['service-name'];

    if (!serviceCode || !serviceName) {
      return res.status(400).json({
        authMiddleware: {
          ok: false,
          error: {
            code: 'ServiceCodeInspectionError',
            message: 'Service code or name is required in headers.',
          },
        },
      });
    }

    next();
  }
}
