use('ecomm') 

const productsJSON = require('./products/ecomm-products.json')

const result = db.products.insertMany(productsJSON)

console.log(result)