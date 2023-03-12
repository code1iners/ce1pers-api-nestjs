import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
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
