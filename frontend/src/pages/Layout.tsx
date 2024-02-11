import { Outlet, useNavigation } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { ColabLogo } from '../components/icons/ColabLogo';

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center pt-7">
        ColabUsers
      </h1>
      <main>
        {navigation.state === 'loading' && (
          <div className="fixed top-4 right-6 z-50 flex items-center gap-2">
            <p className="uppercase text-indigo-500">Loading</p>
            <ColabLogo />
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
