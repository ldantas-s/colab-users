import { User } from '../entities/User';

export interface UserService {
  fetchUsers(params?: { [key: string]: string }): Promise<User[]>;
  getUserById(id: string): Promise<User>;
}
