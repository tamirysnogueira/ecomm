/* eslint-disable import/extensions */
/* eslint-disable no-case-declarations */
import chalk from 'chalk';
import CategoryService from './CategoryService.js';

const consolePath = process.argv;

function printContent(content) {
  const {
    dataOfDatabase,
    responseStatus,
    message,
  } = content;

  console.log(dataOfDatabase);

  if (responseStatus >= 400) {
    return console.log(chalk.black.bgRed(message));
  }

  return console.log(chalk.black.bgGreen(message));
}

// eslint-disable-next-line consistent-return
async function processarComando(args) {
  const databasePath = args[2];

  if (databasePath === undefined) {
    return console.log(new Error('O caminho do arquivo/diretório é obrigatório'));
  }

  switch (databasePath) {
    case '--listarCategorias':
      const categories = await CategoryService.findCategories();
      printContent(categories);

      break;

    case '--recuperarCategoriaPorId':
      const idOfCategory = Number(args[3]);

      const categoryById = await CategoryService.findCategoryById(idOfCategory);
      printContent(categoryById);

      break;

    case '--inserirCategoria':
      const pathOfCategoryJson = args[3];

      const insertedCategory = await CategoryService.createCategory(pathOfCategoryJson);

      printContent(insertedCategory);

      break;
    case '--atualizarCategoria':
      const categoryIdToBeUpdated = args[3];
      const pathOfCategoryToBeUpdated = args[4];

      const updatedCategory = await CategoryService.updateCategory(categoryIdToBeUpdated, pathOfCategoryToBeUpdated);

      printContent(updatedCategory);

      break;
    case '--excluirCategoria':
      const categoryIdToBeDeleted = args[3];

      const deletedCategory = await CategoryService.deleteCategory(categoryIdToBeDeleted);

      printContent(deletedCategory);

      break;
    default:
      throw new Error('Não há esse caminho disponível');
  }
}

processarComando(consolePath);
