import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  
  use(req: Request, res: Response, next: NextFunction) {
    // 응답이 끝났을때 이벤트핸들러
    res.on('finish', () => {
      this.logger.log(`${req.ip} / ${req.method} / ${res.statusCode} / ${req.originalUrl}`)
    })
    next();
  }
}
