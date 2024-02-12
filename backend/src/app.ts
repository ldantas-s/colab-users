import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { routesV1 } from './routes';
import swaggerDoc from '../docs/swagger-output.json';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(express.json());
app.use(cors());

// Add your middleware, error handling, etc. here

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', routesV1);

export { app };
