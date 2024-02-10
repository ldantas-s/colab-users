import { UserService } from '../../services/UserService';

export const userListLoader = (userService: UserService) => async () => {
  const data = await userService.fetchUsers();

  return { users: data };
};
