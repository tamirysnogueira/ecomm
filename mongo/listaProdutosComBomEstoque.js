use('ecomm')

const nameAndStock = db.products.find(
    {"quantidade": {$gte: 3}}, 
    {_id: 1, "nome": 1, "quantidade": 1}
)

console.log(nameAndStock)