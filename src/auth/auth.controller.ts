import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createuser.dto';
import { IResponse } from 'src/common/interfaces/response.interface';
import { loginUserDto } from './dto/loginuser.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  async signup(@Body() data: CreateUserDto): Promise<IResponse<any>> {
    const user = await this.authService.signup(data);

    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      data: user,
    };
  }
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() data: loginUserDto): Promise<IResponse<any>> {
    const user = await this.authService.signIn(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User signed in successfully',
      data: user,
    };
  }
}
