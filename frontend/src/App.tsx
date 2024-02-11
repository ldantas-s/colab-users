import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routesConfig } from './routes';

const routes = createBrowserRouter(routesConfig);

const App = () => <RouterProvider router={routes} />;

export default App;
