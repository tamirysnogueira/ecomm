import fs from 'fs';

export default class CategoryService {
  static async getDatasOfAPI(path, options = {}) {
    try {
      const responseOfDatabase = await fetch(`http://localhost:3000/${path}`, options);
      const dataOfDatabase = await responseOfDatabase.json();
      const { status, statusText } = responseOfDatabase;

      const message = `Response Status: ${status} \n ${statusText}`;

      const datas = {
        dataOfDatabase,
        responseStatus: status,
        responseStatusText: statusText,
        message,
      };

      return datas;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findCategories() {
    const datasCategories = await this.getDatasOfAPI('categories');

    return { ...datasCategories };
  }

  static async findCategoryById(idRequired) {
    const datasCategorieById = await this.getDatasOfAPI(`categories/${idRequired}`);

    return { ...datasCategorieById };
  }

  static async createCategory(pathOfProductJson) {
    const productJson = await fs.promises.readFile(pathOfProductJson, 'utf-8');

    const optionsFetch = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: productJson,
    };

    const datasCreatedCategorie = await this.getDatasOfAPI('categories', optionsFetch);

    return { ...datasCreatedCategorie };
  }

  static async updateCategory(idOfCategory, pathOfCategoryJson) {
    const categoryToBeUpdate = await fs.promises.readFile(pathOfCategoryJson, 'utf-8');

    const optionsFetch = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: categoryToBeUpdate,
    };

    const datasUpdatedCategorie = await this.getDatasOfAPI(`categories/${idOfCategory}`, optionsFetch);

    return { ...datasUpdatedCategorie };
  }

  static async deleteCategory(idOfCategory) {
    const optionsFetch = {
      method: 'DELETE',
    };

    const deletedCategory = await this.getDatasOfAPI(`categories/${idOfCategory}`, optionsFetch);

    return { ...deletedCategory };
  }
}
