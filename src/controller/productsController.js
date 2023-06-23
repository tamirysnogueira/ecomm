import Products from '../models/Products.js';

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const listOfProducts = await Products.find().populate('categoria').exec();
      res.status(200).json(listOfProducts);
    } catch (error) {
      res.status(404).send({ message: `${error.message} - falha ao listar produtos!` });
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;

      const product = await Products.findById(id).populate('categoria').exec();

      res.status(200).json(product);
    } catch (error) {
      res.status(404).send({ message: `${error.message} - falha ao listar o produto!` });
    }
  }

  static async registerProduct(req, res) {
    try {
      const productSchema = new Products(req.body);

      await productSchema.populate('categoria');

      const createdProduct = await productSchema.save();

      res.status(200).json(createdProduct);
    } catch (error) {
      res.status(404).send({ message: `${error.message} - falha ao cadastrar o produto!` });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const bodyOfProductToBeUpdated = req.body;
      await Products.findByIdAndUpdate(id, bodyOfProductToBeUpdated).exec();

      res.status(200).send('Produto atualizado com sucesso!');
    } catch (error) {
      res.status(404).send({ message: `${error.message} - Produto não encontrado!` });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const productDeleted = await Products.findByIdAndDelete(id).exec();

      if (productDeleted === null) throw new Error();

      res.status(200).send('Produato deletado com sucesso!');
    } catch (error) {
      res.status(404).send({ message: `${error.message} - Produto não encontrado!` });
    }
  }
}

export default ProductsController;
