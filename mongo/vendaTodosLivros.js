use('ecomm')

const stockBooks = db.products.updateMany(
    {"CATEGORIA": "LIVROS"},
    {$set: {"QUANTIDADE EM ESTOQUE": 0}}
)

console.log(stockBooks)