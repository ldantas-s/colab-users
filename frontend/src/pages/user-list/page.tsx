import { User } from '../../entities/User';
import { UserCards, UserCardsSkeleton } from '../../components/UserCards';
import { Pagination } from '../../components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { UserService } from '../../services/UserService';
import { EmptySpace } from './EmptySpace';

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
};

const checkStatus = (status: string) => ({
  isIdle: status === REQ_STATUS.idle,
  isLoading: status === REQ_STATUS.loading,
  isFinished: status === REQ_STATUS.finished,
});

export const UserList = ({ userService }: UserList) => {
  const [reqStatus, setReqStatus] = useState(REQ_STATUS.idle);
  const [pagination, setPagination] = useState(initialPaginationState);
  const [users, setUsers] = useState<User[]>([]);

  const fetchingUsers = useCallback(async () => {
    setReqStatus(REQ_STATUS.loading);
    const data = await userService.fetchUsers({
      page: String(pagination.actualPage),
    });

    setReqStatus(REQ_STATUS.finished);
    setUsers(data);
  }, [pagination, userService]);

  useEffect(() => {
    fetchingUsers();
  }, [fetchingUsers]);

  const backwardClick = () => {
    if (pagination.actualPage === 1) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage - 1 }));
  };

  const forwardClick = () => {
    if (pagination.actualPage >= pagination.pages) return;
    setPagination((prev) => ({ ...prev, actualPage: prev.actualPage + 1 }));
  };

  if (!checkStatus(reqStatus).isFinished) return <UserCardsSkeleton />;

  if (checkStatus(reqStatus).isFinished && !users?.length)
    return <EmptySpace />;

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
