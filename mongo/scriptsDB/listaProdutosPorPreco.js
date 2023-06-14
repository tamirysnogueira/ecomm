use('ecomm')

const result = db.products.find(
    {
        $and: [
            {"preco": {$gte: 1000}},
            {"preco": {$lte: 2000}}
        ]
    },
    {_id: 1, "nome": 1, "preco": 1}
)

console.log(result)