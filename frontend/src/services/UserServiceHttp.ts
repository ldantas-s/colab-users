import { HttpClient } from './http/HttpClient';
import { User } from '../entities/User';
import { UserApiResponse, UsersApiResponse } from './UsersResponse';
import { UserService } from './UserService';

export class UserServiceHttp implements UserService {
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  async fetchUsers(params?: { [key: string]: string }): Promise<User[]> {
    const data = await this.httpClient.get<UsersApiResponse>(
      `${this.baseUrl}/users?cache=true&${this.clearFetchParams(params)}`
    );

    return data.results.map(User.createUser);
  }

  async getUserById(id: string): Promise<User> {
    const data = await this.httpClient.get<UserApiResponse>(
      `${this.baseUrl}/users/${id}`
    );
    return User.createUser(data.results);
  }

  private clearFetchParams(params?: { [key: string]: string }): string {
    if (!params) return '';
    return JSON.stringify(params)
      .replace(/:/gm, '=')
      .replace(/\{|\}|"/gm, '')
      .replace(/,/gm, '&');
  }
}
