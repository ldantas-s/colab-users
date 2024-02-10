import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routesConfig } from './routes';
import { Footer } from './components/Footer';

const routes = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center pt-7">
        ColabUsers
      </h1>
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
};

export default App;
