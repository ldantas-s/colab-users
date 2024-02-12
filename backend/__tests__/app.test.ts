import request from 'supertest';
import { app } from '../src/app';

const requestApp = request(app);

test('should return the API version', async () => {
  const response = await requestApp.get('/api');
  expect(response.body).toMatchObject({
    title: 'Node API',
    version: '0.0.1',
  });
});
