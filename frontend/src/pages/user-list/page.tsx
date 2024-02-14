import { useCallback, useEffect, useState } from 'react';

import { User } from '../../entities/User';
import { UserService } from '../../services/UserService';
import { UserCards, UserCardsSkeleton } from '../../components/UserCards';
import { Pagination } from '../../components/Pagination';
import { EmptyState } from '../../components/EmptyState';
import { ErrorState } from '../../components/ErrorState';

const initialPaginationState = {
  pages: 5,
  actualPage: 1,
  perPage: 12,
};

type UserList = {
  userService: UserService;
};

const REQ_STATUS = {
  idle: 'idle',
  loading: 'loading',
  finished: 'finished',
  error: 'error',
};

const checkStatus = (status: string) => ({
  isIdle: status === REQ_STATUS.idle,
  isLoading: status === REQ_STATUS.loading,
  isFinished: status === REQ_STATUS.finished,
  isError: status === REQ_STATUS.error,
});

export const UserList = ({ userService }: UserList) => {
  const [reqStatus, setReqStatus] = useState(REQ_STATUS.idle);
  const [pagination, setPagination] = useState(initialPaginationState);
  const [users, setUsers] = useState<User[]>([]);

  const fetchingUsers = useCallback(async () => {
    setReqStatus(REQ_STATUS.loading);
    try {
      const data = await userService.fetchUsers({
        page: String(pagination.actualPage),
      });

      setReqStatus(REQ_STATUS.finished);
      setUsers(data);
    } catch (error) {
      setReqStatus(REQ_STATUS.error);
    }
  }, [pagination, userService]);

  useEffect(() => {
    fetchingUsers();
    window.scrollTo(0, 0);
  }, [fetchingUsers]);

  const backwardClick = () => {
    if (pagination.actualPage === 1) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage - 1 }));
  };

  const forwardClick = () => {
    if (pagination.actualPage >= pagination.pages) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage + 1 }));
  };

  if (checkStatus(reqStatus).isError)
    return (
      <ErrorState
        title="Internal Problem"
        content="Sorry, something went wrong on the server. Please try again later."
      />
    );

  if (!checkStatus(reqStatus).isFinished) return <UserCardsSkeleton />;

  if (checkStatus(reqStatus).isFinished && !users?.length)
    return <EmptyState title="No users found" />;

  return (
    <>
      <UserCards users={users} />
      {checkStatus(reqStatus).isFinished && (
        <Pagination
          actualPage={pagination.actualPage}
          pages={pagination.pages}
          perPage={pagination.perPage}
          backwardClick={backwardClick}
          forwardClick={forwardClick}
        />
      )}
    </>
  );
};
