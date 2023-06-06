use('ecomm')

const products = db.products.find()

const fieldsRequired = [
    "_id", 
    "nome",
    "descricao",
    "slug",
    "estoque",
    "categoria"
]

products.forEach( product => {

    const fieldsOfProduct = Object.keys(product)

    //Verifica se há campos não requisitados, se houver esse tipo de campo
    //irá excluir do produto
    
    for (const fieldOfProduct of fieldsOfProduct) {
        if(!fieldsRequired.includes(fieldOfProduct)) {

            const updateOperation = {
                $unset: {
                    [fieldOfProduct]: ""
                }
            }

            const updatedField = db.products.updateMany(
                { },
                updateOperation
            )

            console.log(updatedField)
        }
    }
    
});



