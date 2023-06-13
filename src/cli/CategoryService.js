import chalk from "chalk";

export default class CategoryService {
    static async findCategories() {
        const listOProductsFromDatabase = await fetch('http://localhost:3000/categories')
        const listOProducts = await listOProductsFromDatabase.json();
        const status = listOProductsFromDatabase.status

        console.log(chalk.black.bgGray(`Response Status: ${status}`))

        return listOProducts

    }

    static async findCategoryById(idRequired) {
        const listOProductsFromDatabase = await fetch('http://localhost:3000/categories')
        const listOProducts = await listOProductsFromDatabase.json();
        const status = listOProductsFromDatabase.status

        const productFoundById = listOProducts.find( product => { 
            if(product.id === idRequired) {return product}

        })

        if(productFoundById != undefined) {
            console.log(chalk.black.bgGreen(`Response Status: ${status}`))
            return productFoundById
        } 

        if(productFoundById === undefined) {
            const messageError = chalk.black.bgRed(`Response Status: 404. Id não encontrado`)
            return messageError
        }
    }
}