import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { routesV1 } from './routes';
import swaggerDoc from '../docs/swagger-output.json';
import { errorsHandler } from './middlewares/errorsHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', routesV1);

app.use(errorsHandler);

export { app };
