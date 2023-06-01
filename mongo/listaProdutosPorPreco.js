use('ecomm')

const priceOfProducts = {
    $and: [
        {
            "PREÇO UNITÁRIO": {$gte: 1000}
        },
        {
            "PREÇO UNITÁRIO": {$lte: 2000}
        }
    ],
}

const descriptionOfProducts = {
    _id: 1, 
    "NOME": 1, 
    "PREÇO UNITÁRIO": 1
}

const result = db.products.find(
    priceOfProducts,
    descriptionOfProducts
)

console.log(result)