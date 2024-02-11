import { User } from '../entities/User';

import { UserCard, UserCardSkeleton } from './UserCard';

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

export const UserCardsSkeleton = () => {
  return (
    <div className="flex flex-wrap m-2 py-6">
      {Object.keys(Array(12).fill(1)).map((key) => (
        <UserCardSkeleton key={key} />
      ))}
    </div>
  );
};
