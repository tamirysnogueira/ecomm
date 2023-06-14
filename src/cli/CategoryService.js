import chalk from "chalk";
import fs from 'fs'
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

    static async createCategory (pathOfProductJson) {
        const productJson = await fs.promises.readFile(pathOfProductJson, 'utf-8')

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: productJson
        }

        try {
            const insertResponse = await fetch('http://localhost:3000/categories', options)
            const response = await insertResponse.json()
            const status = insertResponse.status
            const statusText = insertResponse.statusText

            console.log(response)

            const messageSuccess = chalk.black.bgGreen(`Response Status: ${status} \n ${statusText}`)

            return messageSuccess
        } catch (error) {
            return error
        }

    }

    static async updateCategory  (idOfCategory, pathOfCategoryJson ) {
        const categoryToBeUpdate = await fs.promises.readFile(pathOfCategoryJson, 'utf-8')

        const optionsFetch = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: categoryToBeUpdate
        }

        try {
            const updatedCategoryResponse = await fetch(`http://localhost:3000/categories/${idOfCategory}`, optionsFetch)
            const updatedCategoryJson = await updatedCategoryResponse.json()
            const statusOfResponse = updatedCategoryResponse.status
            const statusTextOfResponse = updatedCategoryResponse.statusText

            console.log(updatedCategoryJson)

            const messageSuccess = chalk.black.bgGreen(`Response Status: ${statusOfResponse} \n ${statusTextOfResponse}`)

            return messageSuccess
        } catch (error) {
            return error
        }
    }

    static async deleteCategory  (idOfCategory ) {
        const optionsFetch = {
            method: 'DELETE'
        }

        try {
            const deletedCategoryResponse = await fetch(`http://localhost:3000/categories/${idOfCategory}`, optionsFetch)
            const deletedCategoryJson = await deletedCategoryResponse.json()
            const statusOfResponse = deletedCategoryResponse.status
            const statusTextOfResponse = deletedCategoryResponse.statusText

            console.log(deletedCategoryJson)

            const messageSuccess = chalk.black.bgGreen(`Response Status: ${statusOfResponse} \n ${statusTextOfResponse}`)

            return messageSuccess
        } catch (error) {
            return error
        }
    }


}