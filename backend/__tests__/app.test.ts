import request from 'supertest';
import { app } from '../src/app';

const requestApp = request(app);

test('should return a list of users', async () => {
  const response = await requestApp.get('/api/users');

  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({
    results: [
      {
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
      },
    ],
  });
});
