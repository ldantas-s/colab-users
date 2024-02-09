import { render, screen, act } from '@testing-library/react';
import App from './App';
import { UserService } from './services/UserService';

jest.mock('./services/UserService');

jest.spyOn(UserService.prototype, 'fetchUsers').mockImplementation(() =>
  Promise.resolve([
    {
      id: 'cfe07a4c-8f14-4f25-b6d2-e6fecdfa7681',
      name: 'Porfirio Verduzco',
      state: 'Durango',
      nationality: 'MX',
      profilePhoto: 'img/png',
    },
    {
      id: '2b1923c9-ecb5-47a8-a688-0e592ddc6c5c',
      name: 'Felicia Morris',
      state: 'Victoria',
      nationality: 'AU',
      profilePhoto: 'img/png',
    },
  ])
);

test('should show the list of users', async () => {
  await act(() => render(<App />));
  const users = await screen.findAllByTestId('user-card');

  expect(users.length).toBe(2);
  expect(users[0]).toHaveTextContent('Porfirio Verduzco');
  expect(users[0]).toHaveTextContent('Durango, MX');

  expect(users[1]).toHaveTextContent('Felicia Morris');
  expect(users[1]).toHaveTextContent('Victoria, AU');
});
