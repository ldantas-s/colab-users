import express from 'express';

import { versionRoutes } from './version';

const routes = express.Router();

routes.use(versionRoutes);

export const routesV1 = routes;
