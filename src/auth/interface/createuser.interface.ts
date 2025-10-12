export type Role = 'admin' | 'user';

export interface CreateUserInterface {
  name: string;
  email: string;
  password: string;
  role: Role;
}
