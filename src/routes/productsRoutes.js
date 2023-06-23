import express from 'express';
import ProductsController from '../controller/productsController.js';

const productsRoutes = express.Router();

productsRoutes
  .get('/api/produtos', ProductsController.getAllProducts)
  .get('/api/produtos/:id', ProductsController.getProductById)
  .post('/api/admin/produtos', ProductsController.registerProduct)
  .put('/api/admin/produtos/:id', ProductsController.updateProduct)
  .delete('/api/admin/produtos/:id', ProductsController.deleteProduct);

export default productsRoutes;
