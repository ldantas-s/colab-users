import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routesConfig, pagesRoute } from './routes';
import { AxiosAdapter } from './services/AxiosAdapter';

jest.spyOn(AxiosAdapter.prototype, 'get').mockImplementation(() =>
  Promise.resolve({
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Porfirio',
          last: 'Verduzco',
        },
        location: {
          street: {
            number: 389,
            name: 'Continuación Yucatán',
          },
          city: 'San Francisco Chimalpa',
          state: 'Durango',
          country: 'Mexico',
          postcode: 82112,
          coordinates: {
            latitude: '28.0692',
            longitude: '-110.3362',
          },
          timezone: {
            offset: '+9:00',
            description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
          },
        },
        email: 'porfirio.verduzco@example.com',
        login: {
          uuid: 'cfe07a4c-8f14-4f25-b6d2-e6fecdfa7681',
          username: 'ticklishdog893',
          password: 'glow',
          salt: 'H7fs8ivT',
          md5: 'ef2c445a3d3a75663e994323d2681001',
          sha1: '89d5dd7bd1540bddcc74150bbe0f11ce67be3be8',
          sha256:
            'c07d1e1261ffac1c7a97e0146e65cc8c4317ad8ad69f643c86786292992109a4',
        },
        dob: {
          date: '1968-05-08T07:22:28.957Z',
          age: 55,
        },
        registered: {
          date: '2021-08-25T01:18:49.199Z',
          age: 2,
        },
        phone: '(678) 964 4502',
        cell: '(691) 705 1285',
        id: {
          name: 'NSS',
          value: '98 63 46 5645 5',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/88.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg',
        },
        nat: 'MX',
      },
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Felicia',
          last: 'Morris',
        },
        location: {
          street: {
            number: 8648,
            name: 'Spring Hill Rd',
          },
          city: 'Geraldton',
          state: 'Victoria',
          country: 'Australia',
          postcode: 2568,
          coordinates: {
            latitude: '-41.7689',
            longitude: '162.7846',
          },
          timezone: {
            offset: '+7:00',
            description: 'Bangkok, Hanoi, Jakarta',
          },
        },
        email: 'felicia.morris@example.com',
        login: {
          uuid: '2b1923c9-ecb5-47a8-a688-0e592ddc6c5c',
          username: 'angryfrog110',
          password: 'chuckie',
          salt: 'UC1YbuyU',
          md5: '9392125c349d52eb16767e60c126925e',
          sha1: 'ea99ef7cf6058d7c3adba428d95fd9a9d236fee1',
          sha256:
            'cb5b5607905bf8497b5f3e1457bf7a7d884a3b14b8d24d1417477455d0926795',
        },
        dob: {
          date: '1945-07-16T00:11:36.687Z',
          age: 78,
        },
        registered: {
          date: '2013-07-29T04:24:49.016Z',
          age: 10,
        },
        phone: '05-8864-2937',
        cell: '0418-883-488',
        id: {
          name: 'TFN',
          value: '293608692',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/5.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/5.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/5.jpg',
        },
        nat: 'AU',
      },
    ],
    info: {
      seed: 'colab',
      results: 2,
      page: 1,
      version: '1.4',
    },
  })
);

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
  const router = createMemoryRouter([
    { ...pagesRoute['user-list'], loader: () => ({ users: [] }) },
    ...routesConfig,
  ]);
  render(<RouterProvider router={router} />);

  expect(
    await screen.findByTestId('user-card__empty-space')
  ).toBeInTheDocument();
});

test('should go to the user details page when click on the user card', async () => {
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
