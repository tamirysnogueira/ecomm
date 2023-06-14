use('ecomm') 

const productsJSON = require('../products/ecomm-products.json')

productsJSON.forEach((product) => {
    if(Object.hasOwn(product, 'preco')) {
        const tranformPriceToDecimal = NumberDecimal(product.preco.toFixed(2))
        product.preco = tranformPriceToDecimal
    }
    
})

const insertProductsInDb = db.products.insertMany(productsJSON)

console.log(insertProductsInDb)