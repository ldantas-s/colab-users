import express from 'express';

const versionRoutes = express.Router();

versionRoutes.get('/', (req, res) => {
  // #swagger.tags = ['Version'];
  res.status(200).send({
    title: 'Node API',
    version: '0.0.1',
  });
});

export { versionRoutes };
