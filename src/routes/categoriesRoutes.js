import express from 'express';
import CategoriesController from '../controller/categoriesController.js';

const categoriesRoutes = express.Router();

categoriesRoutes
  .get('/api/categories', CategoriesController.getAllCategories)
  .patch('/api/categories/:id', CategoriesController.activateCategory)
  .get('/api/categories/:id', CategoriesController.getCategoryByID)
  .post('/api/admin/categories', CategoriesController.registerCategory)
  .put('/api/admin/categories/:id', CategoriesController.updateCategory)
  .delete('/api/admin/categories/:id', CategoriesController.deleteCategory);

export default categoriesRoutes;
