use('ecomm')

const stockBooks = db.products.updateMany(
    {"categoria": "LIVROS"},
    {$set: {"quantidade": 0}}
)

console.log(stockBooks)