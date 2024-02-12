import request from 'supertest';
import { app } from '../src/app';
import { AxiosAdapter } from '../src/services/http/AxiosAdapter';

const httpClient = AxiosAdapter.prototype;
const requestApp = request(app);

const userReturnedFromAPI = {
  gender: 'female',
  name: {
    title: 'Mrs',
    first: 'Peggy',
    last: 'Morales',
  },
  location: {
    street: {
      number: 5987,
      name: 'Fairview St',
    },
    city: 'Warrnambool',
    state: 'Victoria',
    country: 'Australia',
    postcode: 245,
    coordinates: {
      latitude: '-87.1478',
      longitude: '136.9002',
    },
    timezone: {
      offset: '+8:00',
      description: 'Beijing, Perth, Singapore, Hong Kong',
    },
  },
  email: 'peggy.morales@example.com',
  login: {
    uuid: 'c9ad94fd-c992-4cb6-ae9e-6d0e9fe42cb3',
    username: 'whitegoose848',
    password: 'martinez',
    salt: 'KLkWQAz6',
    md5: '50d04307f27b5b0c54587f2120928b1a',
    sha1: '34144d567cbe745ca418ee6c1691e8c6b2603bc4',
    sha256: '6c603f0e765da06a02fdf40c4afce86354e220085bd60f39e780ea16d90e18f1',
  },
  dob: {
    date: '1945-09-06T14:05:12.247Z',
    age: 78,
  },
  registered: {
    date: '2020-08-15T04:46:56.185Z',
    age: 3,
  },
  phone: '09-8218-7260',
  cell: '0490-519-952',
  id: {
    name: 'TFN',
    value: '303308897',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/58.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/58.jpg',
  },
  nat: 'AU',
};

const mockReturnFromAPI = (n: number = 12) => ({
  results: Array(n).fill(userReturnedFromAPI),
});

test('should return a list of users', async () => {
  jest
    .spyOn(httpClient, 'get')
    .mockImplementation(() => Promise.resolve(mockReturnFromAPI()));
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
  jest
    .spyOn(httpClient, 'get')
    .mockImplementation(() => Promise.resolve(mockReturnFromAPI(6)));
  const response = await requestApp
    .get('/api/users')
    .query({ results: 6, page: 1 });

  expect(response.status).toBe(200);
  expect(response.body.results.length).toBe(6);
});

test('should handle a generic error', async () => {
  jest.spyOn(httpClient, 'get').mockRejectedValue({});
  const response = await requestApp.get('/api/users');

  expect(response.status).toBe(500);
  expect(response.body).toMatchObject({
    type: 'internalServerError',
    message:
      'Sorry, something went wrong on the server. Please try again later.',
  });
});

test('should not call the httpClient if the queries is already called', async () => {
  const httpClientGetMock = jest.fn(() =>
    Promise.resolve(mockReturnFromAPI(1))
  );
  jest.spyOn(httpClient, 'get').mockImplementation(httpClientGetMock);

  const firstResponse = await requestApp.get('/api/users');
  const secondResponse = await requestApp
    .get('/api/users')
    .query({ cache: true });

  expect(firstResponse.status).toBe(200);
  expect(secondResponse.status).toBe(200);
  expect(httpClientGetMock).toHaveBeenCalledTimes(1);
  expect(firstResponse.body).toMatchObject(secondResponse.body);
});

test('should return the user details by id', async () => {
  const response = await requestApp.get(
    '/api/users/c9ad94fd-c992-4cb6-ae9e-6d0e9fe42cb3'
  );

  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({
    results: {
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
  });
});

test('should return a handle error when there is no user with the id informed', async () => {
  const response = await requestApp.get('/api/users/fake-user-id');

  expect(response.status).toBe(404);
  expect(response.body).toMatchObject({
    type: 'notFound',
    message: 'User not found!',
  });
});
