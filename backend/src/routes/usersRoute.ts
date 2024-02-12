import express from 'express';

import { UserServiceHttp } from '../services/UserService';

const usersRoutes = express.Router();

usersRoutes.get('/', async (req, res) => {
  const userService = new UserServiceHttp();
  const users = await userService.getUsers();

  res.status(200).json({
    results: users,
  });
});

export { usersRoutes };
