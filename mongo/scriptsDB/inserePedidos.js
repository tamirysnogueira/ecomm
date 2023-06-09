use('ecomm')

const insertOrder = db.orders.insertMany(
    [{
        dataPedido: new Date(2023, 5, 22),
        enderecoEntrega: {
            bairro: 'aracy',
            rua: 'dona joana',
            numero: '59845',
            cep: '68927335',
            cidade: 'são carlos',
            uf: 'sp'
        },
        account: {
            accountId: new ObjectId('64808e47c343ee934d3da984'),
            nome: 'Tamirys'
        },
        itens: [
            {
                productId: new ObjectId('648089660d5074a7e19c6350'),
                quantidade: 2,
                precoUnitario: NumberDecimal(9176)
            }
        ]

    },
    {
        dataPedido: new Date(2023, 5, 22),
        enderecoEntrega: {
            bairro: "Vila Valqueire",
            rua: "Rua B",
            numero: "55658",
            cep: "21330584",
            cidade: "Rio de Janeiro",
            uf: "RJ"
        },
        account: {
            accountId: new ObjectId('64808e47c343ee934d3da985'),
            nome: 'Caierl'
        },
        itens: [
            {
                productId: new ObjectId('648089660d5074a7e19c6351'),
                quantidade: 1,
                precoUnitario: NumberDecimal(1889)
            },
            {
                productId: new ObjectId('648089660d5074a7e19c6350'),
                quantidade: 2,
                precoUnitario: NumberDecimal(9176.00)
            }
        ]

    }]
)

console.log(insertOrder)