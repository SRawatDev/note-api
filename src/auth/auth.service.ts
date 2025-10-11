import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createUserInterface } from './interface/createuser.interface';
import { PasswordserviceService } from 'src/passwordservice/passwordservice.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,private  PasswordserviceService:PasswordserviceService) {}
    signup=async(data:createUserInterface)=>{
        try {    
            const userInfo=await this.prisma.user.findUnique({
               where:{email:data.email}
           })
           if(userInfo)throw new ConflictException('Email already exists');
           data.password=await this.PasswordserviceService.hasPassword(data.password)
           const userData = await this.prisma.user.create({ data });
           return userData
        } catch (error) {
            throw error;
        }
    }

}