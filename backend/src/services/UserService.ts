import axios from 'axios';

import { User } from '../User';
import { UserApiResponse } from '../UserResponse';
import { HttpClient } from './http/HttpClient';
import { AxiosAdapter } from './http/AxiosAdapter';

export default interface UserService {
  getUsers(): Promise<User[]>;
}

export class UserServiceHttp implements UserService {
  private baseURL: string = 'https://randomuser.me/api';
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new AxiosAdapter();
  }

  async getUsers(): Promise<User[]> {
    const data = await this.httpClient.get<UserApiResponse>(
      `${this.baseURL}/?seed=colab-users`
    );

    return data.results.map(User.createUser);
  }
}
