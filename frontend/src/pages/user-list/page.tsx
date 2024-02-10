import { User } from '../../entities/User';
import { UserCards } from '../../components/UserCards';
import { useLoaderData } from 'react-router-dom';

export const UserList = () => {
  const data = useLoaderData() as { users: User[] };

  if (!data.users?.length)
    return <h1 data-testid="user-card__empty-space">There aren't users!</h1>;

  return (
    <>
      <h1>ColabUsers</h1>
      <UserCards users={data.users} />
    </>
  );
};
