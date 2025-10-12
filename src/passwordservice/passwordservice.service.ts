import { Injectable } from '@nestjs/common';
import * as bycrypt from 'bcrypt';

@Injectable()
export class PasswordserviceService {
    hasPassword=async(password:string)=>{
        return await bycrypt.hash(password, parseInt(process.env.SALT_NUMBER || '10'));
    }
    comparepassword=async(password:string,hasPassword:string)=>{
        return bycrypt.compare(password,hasPassword);
    }
}
