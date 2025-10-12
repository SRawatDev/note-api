import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { PasswordserviceService } from './passwordservice/passwordservice.service';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, NoteModule,AuthModule],
  controllers: [AppController, AuthController, NoteController],
  providers: [AppService, AuthService, PasswordserviceService, NoteService],
})
export class AppModule {}
