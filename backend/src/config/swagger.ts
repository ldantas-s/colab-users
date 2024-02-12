import swaggerAutogen from 'swagger-autogen';

export const docs = {
  info: {
    title: 'Node API',
    version: '1.0.0',
    description: 'Node API documentation',
  },
  servers: [{ url: 'http://localhost:3000/api', description: 'API DEV' }],
};

const options = {
  openapi: '3.0.0',
};
const outputFile = 'docs/swagger-output.json';
const endpointsFiles = ['../routes/index.ts'];

swaggerAutogen(options)(outputFile, endpointsFiles, docs);
