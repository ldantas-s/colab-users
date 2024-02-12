import request from 'supertest';
import { app } from '../src/app';
import { AxiosAdapter } from '../src/services/http/AxiosAdapter';

const requestApp = request(app);

test('should return a list of users', async () => {
  const response = await requestApp.get('/api/users');

  expect(response.status).toBe(200);
  expect(response.body.results.length).toBe(12);
  expect(response.body.results[0]).toMatchObject({
    id: 'c9ad94fd-c992-4cb6-ae9e-6d0e9fe42cb3',
    name: { first: 'Peggy', last: 'Morales' },
    email: 'peggy.morales@example.com',
    cell: '0490-519-952',
    registeredAt: '2020-08-15T04:46:56.185Z',
    userName: 'whitegoose848',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/58.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
    },
    nationality: 'AU',
    location: {
      state: 'Victoria',
      city: 'Warrnambool',
      street: {
        number: 5987,
        name: 'Fairview St',
      },
      postCode: 245,
      coordinates: {
        latitude: '-87.1478',
        longitude: '136.9002',
      },
    },
  });
});

test('should return a list with 6 users defined in the params', async () => {
  const response = await requestApp
    .get('/api/users')
    .query({ results: 6, page: 1 });

  expect(response.status).toBe(200);
  expect(response.body.results.length).toBe(6);
});

test('should handle a generic error', async () => {
  jest.spyOn(AxiosAdapter.prototype, 'get').mockRejectedValue({});
  const response = await requestApp.get('/api/users');

  expect(response.status).toBe(500);
  expect(response.body).toMatchObject({
    type: 'internalServerError',
    message:
      'Sorry, something went wrong on the server. Please try again later.',
  });
});
