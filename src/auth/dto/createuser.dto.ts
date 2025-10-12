import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name is required' })
  name: string;
  @IsEmail({}, { message: 'Valid email is required' })
  email: string;
  @IsString({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
  @IsString({ message: 'Role is required' })
  role: Role;
}

export enum Role {
  user = 'user',
  admin = 'admin',
}