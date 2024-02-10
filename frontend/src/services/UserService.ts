import { User } from '../entities/User';

export interface UserService {
  fetchUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
}
