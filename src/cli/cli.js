import fs from 'fs'
import CategoryService from './CategoryService.js';

const consolePath = process.argv

async function processarComando(args) {
    const databasePath = args[2]

    if(databasePath === undefined) { 
        return console.log(new Error('O caminho do arquivo/diretório é obrigatório')) 
    }

    switch (databasePath) {
        case '--listarCategorias':
            const listOProducts = await CategoryService.findCategories()
            console.log(listOProducts)

            break;
        
        case '--recuperarCategoriaPorId':
            const idOfCategory = Number(args[3])

            const categoryById = await CategoryService.findCategoryById(idOfCategory)

            console.log(categoryById)
            break;

        case '--inserirCategoria':
            const pathOfCategoryJson = args[3]
    
            const insertedCategory = await CategoryService.createCategory(pathOfCategoryJson)
    
            console.log(insertedCategory)

            break;
        case '--atualizarCategoria':
            const categoryIdToBeUpdated = args[3]
            const pathOfCategoryToBeUpdated = args[4]
        
            const updatedCategory = await CategoryService.updateCategory(categoryIdToBeUpdated, pathOfCategoryToBeUpdated)
        
            console.log(updatedCategory)
    
            break;
        case '--excluirCategoria':
            const categoryIdToBeDeleted = args[3]
            
            const deletedCategory = await CategoryService.deleteCategory(categoryIdToBeDeleted)
            
            console.log(deletedCategory)
        
            break;
        default:
            console.log('Não há esse caminho disponível')
            break;
    }
}

processarComando(consolePath)