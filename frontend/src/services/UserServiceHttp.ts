import { HttpClient } from './HttpClient';
import { User } from '../entities/User';
import { UserApiResponse } from './UsersResponse';
import { UserService } from './UserService';

export class UserServiceHttp implements UserService {
  private baseUrl: string = 'https://randomuser.me/api';
  private seed: string = 'colab-users';
  private results: number = 12;
  private usersMemo = new Map<string, User>();

  constructor(private httpClient: HttpClient) {}

  async fetchUsers(params?: { [key: string]: string }): Promise<User[]> {
    const data = await this.httpClient.get<UserApiResponse>(
      `${this.baseUrl}/?seed=${this.seed}&results=${
        this.results
      }&${this.clearFetchParams(params)}`
    );
    return this.handleUsers(data.results);
  }

  async getUserById(id: string): Promise<User> {
    return new Promise((resolve) => {
      const user = this.usersMemo.get(id);
      if (user) resolve(user);
    });

    // const data = await this.httpClient.get<UserApiResponse>(
    //   `${this.baseUrl}/${id}`
    // );
    // return User.createUser(data.results[0]);
  }

  private handleUsers(users: UserApiResponse['results']): User[] {
    return users.map((responseUser) => {
      const user = User.createUser(responseUser);
      this.usersMemo.set(user.id, user);
      return user;
    });
  }

  private clearFetchParams(params?: { [key: string]: string }): string {
    if (!params) return '';
    return JSON.stringify(params)
      .replace(/:/gm, '=')
      .replace(/\{|\}|"/gm, '')
      .replace(/,/gm, '&');
  }
}
