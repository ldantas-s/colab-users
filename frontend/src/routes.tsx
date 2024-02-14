import { UserList, UserListError } from './pages/user-list';
import { UserDetailError, UserDetails, userLoader } from './pages/user-details';
import { UserServiceHttp } from './services/UserServiceHttp';
import { AxiosAdapter } from './services/http/AxiosAdapter';
import { Layout } from './pages/Layout';

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
        errorElement: <UserListError />,
      },
      {
        path: '/user/:id',
        element: <UserDetails />,
        errorElement: <UserDetailError />,
        loader: userLoader(userService),
      },
    ],
  },
];
