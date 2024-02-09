import { User } from '../entities/User';

import { UserCard } from './UserCard';

type UserCards = {
  users: User[];
};

export const UserCards = ({ users }: UserCards) => {
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};
