use("ecomm");

const indexResultOfCategoria = db.categories.createIndex({ categoria: 1 })
const indexResultOfNome = db.categories.createIndex({ nome: 1 })

console.log(indexResultOfCategoria)
console.log(indexResultOfNome)