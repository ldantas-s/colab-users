import express from 'express';

import { versionRoutes } from './version';
import { usersRoutes } from './usersRoute';

const routes = express.Router();

routes.use(versionRoutes);
routes.use('/users', usersRoutes);

export const routesV1 = routes;
