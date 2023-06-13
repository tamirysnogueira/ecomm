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
            const idOfProduct = Number(args[3])

            const productById = await CategoryService.findCategoryById(idOfProduct)

            console.log(productById)
            break;
        default:
            console.log('Não há esse caminho disponível')
            break;
    }
}

processarComando(consolePath)