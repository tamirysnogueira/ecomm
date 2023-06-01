use("ecomm");

const indexOfCategoria = db.categories.createIndex({ categoria: 1 })
const indexOfNome = db.categories.createIndex({ nome: 1 })
const indexOfPreco = db.categories.createIndex({ preco: 1 })

console.log(indexOfCategoria)
console.log(indexOfNome)
console.log(indexOfPreco)