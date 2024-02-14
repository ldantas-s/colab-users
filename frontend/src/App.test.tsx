import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routesConfig } from './routes';
import { AxiosAdapter } from './services/http/AxiosAdapter';
import { UserServiceHttp } from './services/UserServiceHttp';
import { User } from './entities/User';

const httpClinet = AxiosAdapter.prototype;

const firstUserAPIResponse = {
  id: 'c9ad94fd-c992-4cb6-ae9e-6d0e9fe42cb3',
  name: {
    first: 'Porfirio',
    last: 'Verduzco',
  },
  email: 'porfirio.verduzco@example.com',
  cell: '(691) 705 1285',
  registeredAt: '2021-08-15T04:46:56.185Z',
  userName: 'ticklishdog893',
  picture: {
    large: 'img/jpg',
    medium: 'img/jpg',
  },
  nationality: 'MX',
  location: {
    state: 'Durango',
    city: 'San Francisco Chimalpa',
    street: {
      number: 389,
      name: 'Continuación Yucatán',
    },
    postCode: 82112,
    coordinates: {
      latitude: '-87.1478',
      longitude: '136.9002',
    },
  },
};
beforeEach(() => {
  jest.spyOn(httpClinet, 'get').mockImplementation(() =>
    Promise.resolve({
      results: [
        firstUserAPIResponse,
        {
          id: 'f092ef83-5064-40dd-bc06-abcbbb0592a6',
          name: {
            first: 'Felicia',
            last: 'Morris',
          },
          email: 'marilou.perez@example.com',
          cell: '06-30-09-59-26',
          registeredAt: '2017-10-22T07:38:27.080Z',
          userName: 'orangeelephant358',
          picture: {
            large: 'https://randomuser.me/api/portraits/women/70.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/70.jpg',
          },
          nationality: 'AU',
          location: {
            state: 'Victoria',
            city: 'Dunkerque',
            street: {
              number: 7466,
              name: 'Avenue Debrousse',
            },
            postCode: 23939,
            coordinates: {
              latitude: '30.0883',
              longitude: '-177.5219',
            },
          },
        },
      ],
    })
  );
  jest.spyOn(window, 'scrollTo').mockImplementation(() => null);
});

test('should show the list of users', async () => {
  const router = createMemoryRouter(routesConfig);
  render(<RouterProvider router={router} />);
  const users = await screen.findAllByTestId('user-card');

  expect(users.length).toBe(2);
  expect(users[0]).toHaveTextContent('Porfirio Verduzco');
  expect(users[0]).toHaveTextContent('Durango, MX');

  expect(users[1]).toHaveTextContent('Felicia Morris');
  expect(users[1]).toHaveTextContent('Victoria, AU');
});

test('should the empty space in case of has not an user', async () => {
  jest
    .spyOn(httpClinet, 'get')
    .mockImplementation(() => Promise.resolve({ results: [] }));
  const router = createMemoryRouter(routesConfig);
  render(<RouterProvider router={router} />);

  expect(
    await screen.findByTestId('user-card__empty-space')
  ).toBeInTheDocument();
});

test('should go to the user details page when click on the user card', async () => {
  jest
    .spyOn(UserServiceHttp.prototype, 'getUserById')
    .mockImplementation(() =>
      Promise.resolve(User.createUser(firstUserAPIResponse))
    );

  const router = createMemoryRouter(routesConfig);
  render(<RouterProvider router={router} />);

  const users = await screen.findAllByTestId('user-card');
  const userOne = users[0];

  expect(userOne).toHaveTextContent('Porfirio Verduzco');

  fireEvent.click(userOne);

  await waitFor(() => {
    expect(screen.getByTestId('user-detail_name')).toHaveTextContent(
      'Porfirio Verduzco'
    );
    expect(screen.getByTestId('user-detail_username')).toHaveTextContent(
      '@ticklishdog893'
    );
    expect(screen.getByTestId('user-detail_email')).toHaveTextContent(
      'porfirio.verduzco@example.com'
    );
    expect(screen.getByTestId('user-detail_cell')).toHaveTextContent(
      '(691) 705 1285'
    );
    expect(screen.getByTestId('user-detail_registered')).toHaveTextContent(
      'Registerd in Aug 2021'
    );
    expect(screen.getByTestId('user-detail_location')).toHaveTextContent(
      'Continuación Yucatán, 389, San Francisco Chimalpa - MX, 82112'
    );
  });
});

test('should get the users from page 2 clicking on pagination', async () => {
  const router = createMemoryRouter(routesConfig);
  render(<RouterProvider router={router} />);

  const paginateNext = await screen.findByTestId('paginate-next__button');

  const fetchUsers = jest.fn();
  jest
    .spyOn(UserServiceHttp.prototype, 'fetchUsers')
    .mockImplementation(fetchUsers);

  fireEvent.click(paginateNext);

  await waitFor(() => expect(fetchUsers).toHaveBeenCalledWith({ page: '2' }));
});
