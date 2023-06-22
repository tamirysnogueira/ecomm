import express from 'express';
import categoriesRoutes from './categoriesRoutes.js';
import productsRoutes from './productsRoutes.js';

function routes(app) {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Projeto Ecomm' });
  });

  app.use(
    express.json(),
    categoriesRoutes,
    productsRoutes,
  );
}

export default routes;
