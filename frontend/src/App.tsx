import { useEffect, useMemo, useState } from 'react';

import { User } from './entities/User';
import { UserService } from './services/UserService';
import { UserCards } from './components/UserCards';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userService = useMemo(() => new UserService(), []);

  useEffect(() => {
    userService.fetchUsers().then(setUsers);
  }, [userService]);

  return (
    <>
      <h1>ColabUsers</h1>
      <UserCards users={users} />
    </>
  );
};

export default App;
