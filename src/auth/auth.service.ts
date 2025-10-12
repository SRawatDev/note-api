import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInterface } from './interface/createuser.interface';
import { PasswordserviceService } from 'src/passwordservice/passwordservice.service';
import { loginUserInterface } from './interface/loginuser.interface';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private PasswordserviceService: PasswordserviceService) { }
    signup = async (data: CreateUserInterface) => {
        try {
            const userInfo = await this.prisma.user.findUnique({
                where: { email: data.email }
            })
            if (userInfo) throw new ConflictException('Email already exists');
            data.password = await this.PasswordserviceService.hasPassword(data.password)
            const userData = await this.prisma.user.create({ data });
            return userData
        } catch (error) {
            throw error;
        }
    }
    signIn = async (data: loginUserInterface) => {
        try {
            const userInfp = await this.prisma.user.findUnique({ where: { email: data?.email } })
            if (!userInfp) throw new ConflictException("Email not found")
            const comparePassword = await this.PasswordserviceService.comparepassword(data.password, userInfp.password)
            if (!comparePassword) throw new ConflictException("Invalid password")
            return userInfp
        } catch (error) {
            throw error
        }
    }
}