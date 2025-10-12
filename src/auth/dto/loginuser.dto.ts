import { IsString } from "class-validator";
export class loginUserDto{
    @IsString({message:"Email is required"})
    email:string;
    @IsString({message:"Password is required"})
    password:string;
    @IsString({message:"Role is required to give"})
    role:Role
}
enum Role {
  admin = "admin",
  user = "user"
}