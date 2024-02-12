import { User } from '../User';
import { UserApiResponse } from '../UserResponse';
import { HttpClient } from './http/HttpClient';
import { AxiosAdapter } from './http/AxiosAdapter';
import { InternalServerError } from '../utils/errors/InternalServerError';

export type Queries = { [key: string]: string };
export default interface UserService {
  getUsers(queries?: Queries): Promise<User[]>;
}

export class UserServiceHttp implements UserService {
  private baseURL: string = 'https://randomuser.me/api';
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new AxiosAdapter();
  }

  async getUsers(queries?: Queries): Promise<User[]> {
    const parsedQueries = this.parseQueries({ results: '12', ...queries });
    try {
      const data = await this.httpClient.get<UserApiResponse>(
        `${this.baseURL}/?seed=colab-users&${parsedQueries}`
      );

      return data.results.map(User.createUser);
    } catch (error) {
      throw new InternalServerError(
        'Sorry, something went wrong on the server. Please try again later.'
      );
    }
  }

  private parseQueries(queries?: Queries): string {
    if (!queries) return '';
    return JSON.stringify(queries)
      .replace(/:/gm, '=')
      .replace(/\{|\}|"/gm, '')
      .replace(/,/gm, '&');
  }
}
