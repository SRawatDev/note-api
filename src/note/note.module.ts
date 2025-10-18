// src/note/note.module.ts
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { LoggerAuthMiddleware } from 'src/logger/logger.middleware';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [NoteController],
  providers: [NoteService,PrismaService],
})
export class NoteModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerAuthMiddleware)
      .forRoutes({ path: 'note/add', method: RequestMethod.POST });
  }
}
