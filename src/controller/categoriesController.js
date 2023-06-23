import Categories from '../models/Categories.js';

class CategoriesController {
  static async getAllCategories(_, res) {
    try {
      const livrosResultado = await Categories.find().exec();
      res.status(200).json(livrosResultado);
    } catch (error) {
      res.status(404).send({ message: `${error.message} - falha ao listar livro!` });
    }
  }

  static async getCategoryByID(req, res) {
    try {
      const { id } = req.params;

      const categoryById = await Categories.findById(id).exec();

      res.status(200).json(categoryById);
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao listar livro!` });
    }
  }

  static async registerCategory(req, res) {
    try {
      const categorySchema = new Categories(req.body);

      const createdCategory = await categorySchema.save();

      res.status(201).json(createdCategory);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const bodyOfCategoryToBeUpdated = req.body;
      await Categories.findByIdAndUpdate(id, bodyOfCategoryToBeUpdated).exec();

      res.status(200).json({ message: 'Categoria atualizada com sucesso!' });
    } catch (error) {
      res.status(404).send({ message: `${error.message} - Categoria não encontrada!` });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const categoryDeleted = await Categories.findByIdAndDelete(id).exec();

      if (categoryDeleted === null) throw new Error();

      res.status(200).json({ message: 'Categoria deletada com sucesso!' });
    } catch (error) {
      res.status(404).send({ message: `${error.message} Categoria não encontrada!` });
    }
  }

  static async activateCategory(req, res) {
    try {
      const { id } = req.params;
      const statusField = {
        status: 'ATIVA',
      };

      const activatedCategory = await Categories.findByIdAndUpdate(id, statusField).exec();

      if (activatedCategory === null) throw new Error();

      res.status(200).json(activatedCategory);
    } catch (error) {
      res.status(404).send({ message: `${error.message} Categoria não encontrada!` });
    }
  }
}

export default CategoriesController;
