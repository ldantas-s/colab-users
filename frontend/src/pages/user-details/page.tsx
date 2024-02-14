import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Map } from '../../components/Map';
import { FeedbackForm } from '../../components/FeedbackForm';
import { DetailsInfo } from '../../components/DetailsInfo';
import { EmptyState } from '../../components/EmptyState';

import { UserLoaderReturn } from './loader';

export const UserDetails = () => {
  const data = useLoaderData() as UserLoaderReturn;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data.user) return <EmptyState title="No user found" />;

  const { city, postCode, streetName, streetNumber, lat, lon } =
    data.user.location;
  const address = `${streetName}, ${streetNumber}, ${city} - ${data.user.nationality}, ${postCode}`;

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pt-12 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Map latitude={lat} longitude={lon} />
          <DetailsInfo
            address={address}
            cell={data.user.cell}
            email={data.user.email}
            username={data.user.username}
            profilePhoto={data.user.profilePhoto}
            name={data.user.name}
            registeredAt={data.user.getRegisteredTime()}
          />
        </div>
        <FeedbackForm />
      </div>
    </section>
  );
};
