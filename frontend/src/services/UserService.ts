import { HttpClient } from './HttpClient';
import { User } from '../entities/User';
import { UserApiResponse } from './UsersResponse';
import { AxiosAdapter } from './AxiosAdapter';

export class UserService {
  private baseUrl: string = 'https://randomuser.me/api';
  constructor(public httpClient: HttpClient = new AxiosAdapter()) {}

  async fetchUsers(): Promise<User[]> {
    const data = await this.httpClient.get<UserApiResponse>(
      `${this.baseUrl}/?results=5`
    );
    return data.results.map((user) => User.createUser(user));
  }
}
