import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router';

import { UserService } from '../../services/UserService';
import { User } from '../../entities/User';

const Paths = {
  userDetail: '/user/:id',
} as const;

type UserLoader = ActionFunctionArgs & {
  params: Params<ParamParseKey<typeof Paths.userDetail>>;
};

export type UserLoaderReturn = { user: User };

export const userLoader =
  (userService: UserService) =>
  async ({ params }: UserLoader): Promise<UserLoaderReturn> => {
    const user = await userService.getUserById(params.id || '');
    return { user };
  };
