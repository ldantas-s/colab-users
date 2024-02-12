import axios, { AxiosRequestConfig } from 'axios';
import { HttpClient } from './HttpClient';

export class AxiosAdapter implements HttpClient {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axios.get<T>(url, config);
    return response.data;
  }
}
