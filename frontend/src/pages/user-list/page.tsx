import { useLoaderData } from 'react-router-dom';

import { User } from '../../entities/User';
import { UserCards } from '../../components/UserCards';
import { Pagination } from '../../components/Pagination';
import { useState } from 'react';

const initialPaginationState = {
  pages: 5,
  actualPage: 1,
  perPage: 12,
};

export const UserList = () => {
  const [pagination, setPagination] = useState(initialPaginationState);
  const data = useLoaderData() as { users: User[] };

  if (!data.users?.length)
    return <h1 data-testid="user-card__empty-space">There aren't users!</h1>;

  const backwardClick = () => {
    if (pagination.actualPage === 1) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage - 1 }));
  };

  const forwardClick = () => {
    if (pagination.actualPage >= pagination.pages) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage + 1 }));
  };

  return (
    <>
      <UserCards users={data.users} />
      <Pagination
        actualPage={pagination.actualPage}
        pages={pagination.pages}
        perPage={pagination.perPage}
        backwardClick={backwardClick}
        forwardClick={forwardClick}
      />
    </>
  );
};
