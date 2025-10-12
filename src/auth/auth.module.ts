import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordserviceService } from 'src/passwordservice/passwordservice.service';
import { NoteModule } from 'src/note/note.module';

@Module({
  imports: [
    JwtModule.register({
      global: true, // ✅ Makes JwtService available anywhere in app
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    NoteModule,
  ],
  providers: [
    AuthService,
    PrismaService,
    PasswordserviceService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
