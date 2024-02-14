import { UserList } from './pages/user-list';
import { UserDetails, userLoader } from './pages/user-details';
import { UserServiceHttp } from './services/UserServiceHttp';
import { AxiosAdapter } from './services/http/AxiosAdapter';
import { Layout } from './pages/Layout';
import { ErrorState } from './components/ErrorState';

const axiosClientHttp = new AxiosAdapter();
const userService = new UserServiceHttp(axiosClientHttp);

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <UserList userService={userService} />,
      },
      {
        path: '/user/:id',
        element: <UserDetails />,
        errorElement: (
          <ErrorState
            title="Sorry, we can't find this user"
            content="Try to come back to users list and click in another one!"
          />
        ),
        loader: userLoader(userService),
      },
    ],
  },
];
