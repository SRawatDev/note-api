import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constants';

@Injectable()
export class LoggerAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    try {
      const secret = jwtConstants.secret
      const decoded = jwt.verify(token, secret) as any;
      req['auth'] = { _id: decoded.id };
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
