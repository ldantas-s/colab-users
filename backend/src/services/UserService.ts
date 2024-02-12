import { User } from '../User';
import { UserApiResponse } from '../UserResponse';
import { HttpClient } from './http/HttpClient';
import { AxiosAdapter } from './http/AxiosAdapter';
import { InternalServerError } from '../utils/errors/InternalServerError';

export type Queries = { [key: string]: string } | { cache?: boolean };
export default interface UserService {
  getUsers(queries?: Queries): Promise<User[]>;
}

export class UserServiceHttp implements UserService {
  private baseURL: string = 'https://randomuser.me/api';
  private httpClient: HttpClient;
  private usersMemoization: { [key: string]: User[] };

  constructor() {
    this.httpClient = new AxiosAdapter();
    this.usersMemoization = {};
  }

  async getUsers(queries?: Queries): Promise<User[]> {
    const cache = JSON.parse((queries?.['cache'] || 'false') as string);
    const parsedQueries = this.parseQueries({ results: '12', ...queries });

    if (this.usersMemoization[parsedQueries] !== undefined && cache) {
      return this.usersMemoization[parsedQueries];
    }

    try {
      const data = await this.httpClient.get<UserApiResponse>(
        `${this.baseURL}/?seed=colab-users&${parsedQueries}`
      );
      const users = data.results.map(User.createUser);

      this.usersMemoization[parsedQueries] = users;

      return users;
    } catch (error) {
      throw new InternalServerError(
        'Sorry, something went wrong on the server. Please try again later.'
      );
    }
  }

  private parseQueries(queries?: Queries): string {
    if (!queries) return '';

    delete queries?.cache;

    return JSON.stringify(queries)
      .replace(/:/gm, '=')
      .replace(/\{|\}|"/gm, '')
      .replace(/,/gm, '&');
  }
}
