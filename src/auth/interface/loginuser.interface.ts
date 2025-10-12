export type Role = 'admin' | 'user';
export interface loginUserInterface{
    email:string,
    password:string,
    role:Role
}