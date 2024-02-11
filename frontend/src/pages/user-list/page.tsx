import { useLoaderData } from 'react-router-dom';

import { User } from '../../entities/User';
import { UserCards } from '../../components/UserCards';

export const UserList = () => {
  const data = useLoaderData() as { users: User[] };

  if (!data.users?.length)
    return <h1 data-testid="user-card__empty-space">There aren't users!</h1>;

  return <UserCards users={data.users} />;
};
