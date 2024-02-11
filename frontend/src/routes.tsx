import { UserList, UserListError, userListLoader } from './pages/user-list';
import { UserDetailError, UserDetails, userLoader } from './pages/user-details';
import { UserServiceHttp } from './services/UserServiceHttp';
import { AxiosAdapter } from './services/AxiosAdapter';
import { Layout } from './pages/Layout';

const axiosClientHttp = new AxiosAdapter();
const userService = new UserServiceHttp(axiosClientHttp);

export const pagesRoute = {
  'user-list': {
    path: '/',
    element: <UserList />,
    errorElement: <UserListError />,
    loader: userListLoader(userService),
  },
  'user-details': {
    path: '/user/:id',
    element: <UserDetails />,
    errorElement: <UserDetailError />,
    loader: userLoader(userService),
  },
};

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: Object.values(pagesRoute),
  },
];
