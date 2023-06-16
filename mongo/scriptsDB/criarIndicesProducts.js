use('ecomm');

const indexOfCategoria = db.products.createIndex({ categoria: 1 });
const indexOfNome = db.products.createIndex({ nome: 1 });
const indexOfPreco = db.products.createIndex({ preco: 1 });

console.log(indexOfCategoria);
console.log(indexOfNome);
console.log(indexOfPreco);
