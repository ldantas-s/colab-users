import { HttpClient } from './HttpClient';
import { User } from '../entities/User';
import { UserApiResponse } from './UsersResponse';
import { UserService } from './UserService';

export class UserServiceHttp implements UserService {
  private baseUrl: string = 'https://randomuser.me/api';
  private usersMemo = new Map<string, User>();

  constructor(private httpClient: HttpClient) {}

  async fetchUsers(): Promise<User[]> {
    const data = await this.httpClient.get<UserApiResponse>(
      `${this.baseUrl}/?results=2&seed=colab`
    );
    const users = data.results.map((responseUser) => {
      const user = User.createUser(responseUser);
      this.usersMemo.set(user.id, user);
      return user;
    });

    return users;
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
}
