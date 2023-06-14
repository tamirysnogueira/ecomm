use('ecomm')

const nameAndStock = db.products.find(
    {"estoque": {$gte: 3}}, 
    {_id: 1, "nome": 1, "estoque": 1}
)

console.log(nameAndStock)