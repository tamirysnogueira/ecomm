use('ecomm')

const categoriesBooksAndCellPhones = db.products.find(
    {$or:[
        {"categoria": "LIVROS"},
        {"categoria": "CELULARES"}
    ]}
)

console.log(categoriesBooksAndCellPhones)