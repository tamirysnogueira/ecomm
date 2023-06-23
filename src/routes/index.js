import express from 'express';
import productsRoutes from './productsRoutes.js';
import categoriesRoutes from './categoriesRoutes.js';
import swaggerRoutes from './swaggerRoutes.js';

function routes(app) {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Projeto Ecomm' });
  });

  app.use(
    swaggerRoutes.url,
    swaggerRoutes.nxt,
    swaggerRoutes.functionExecutable,
  );

  app.use(
    express.json(),
    categoriesRoutes,
    productsRoutes,
  );
}

export default routes;
