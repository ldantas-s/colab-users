import { User } from '../entities/User';

import { UserCard } from './UserCard';

type UserCards = {
  users: User[];
};

export const UserCards = ({ users }: UserCards) => {
  return (
    <section className="flex flex-wrap m-2 py-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
};
