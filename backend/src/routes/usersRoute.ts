import express from 'express';

import { Queries, UserServiceHttp } from '../services/UserService';

const usersRoutes = express.Router();

const userService = new UserServiceHttp();

usersRoutes.get('/', async (req, res, next) => {
  // #swagger.tags = ['Users']
  try {
    const users = await userService.getUsers(req.query as Queries);

    res.status(200).json({
      results: users,
    });
  } catch (error) {
    next(error);
  }
});

usersRoutes.get('/:userId', async (req, res, next) => {
  // #swagger.tags = ['Users']
  try {
    const user = await userService.getUserById(req.params.userId);

    res.status(200).json({
      results: user,
    });
  } catch (error) {
    next(error);
  }
});

export { usersRoutes };
