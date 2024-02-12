export interface HttpClient {
  get<T>(url: string, config?: unknown): Promise<T>;
}
