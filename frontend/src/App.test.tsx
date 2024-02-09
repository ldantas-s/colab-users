import { render, screen } from '@testing-library/react';
import App from './App';

test('should show the list of users', () => {
  render(<App />);
  const users = screen.getAllByTestId('user-card');

  expect(users.length).toBe(2);
  expect(users[0]).toHaveTextContent('Porfirio Verduzco');
  expect(users[0]).toHaveTextContent('Durango, MX');

  expect(users[1]).toHaveTextContent('Felicia Morris');
  expect(users[1]).toHaveTextContent('Victoria, AU');
});
