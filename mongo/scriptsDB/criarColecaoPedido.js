use('ecomm');

const createOrdersCollection = db.createCollection('orders', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Conta do usuário',
      required: ['nome', 'email', 'senha', 'dataCriacao', 'cpf', 'telefone', 'endereco', '_id'],
      properties: {
        _id: {
          description: 'Identificador único para cada pedido',
          bsonType: 'objectId',
        },
        dataPedido: {
          bsonType: 'date',
          description: 'insira a data do pedido',
        },
        account: {
          bsonType: 'object',
          required: ['accountId', 'nome'],
          properties: {
            accountId: {
              bsonType: 'objectId',
              description: 'insira o ID da conta do cliente',
            },
            nome: {
              bsonType: 'string',
              description: 'insira o nome do cliente',
            },
          },
          additionalProperties: false,
        },
        enderecoEntrega: {
          bsonType: 'object',
          required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
          properties: {
            bairro: { bsonType: 'string', minLength: 1 },
            rua: { bsonType: 'string', minLength: 1 },
            numero: { bsonType: 'string', minLength: 1 },
            cep: { bsonType: 'string', minLength: 8, maxLength: 8 },
            cidade: { bsonType: 'string', minLength: 5 },
            uf: { bsonType: 'string', minLength: 2, maxLength: 2 },
            complemento: { bsonType: 'string' },
          },
          additionalProperties: false,
        },
        itens: {
          bsonType: 'array',
          required: ['productId', 'quantidade', 'precoUnitario'],
          minItems: 1,
          properties: {
            productId: {
              bsonType: 'objectId',
              description: 'insira o ID do produto',
            },
            quantidade: {
              bsonType: 'int',
              minimum: 1,
              description: 'insira a quantidade',
            },
            desconto: {
              bsonType: 'decimal',
              minimum: 1,
              exclusiveMinimum: true,
            },
            precoUnitario: {
              bsonType: 'decimal',
              minimum: 1,
              exclusiveMinimum: true,
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
});

console.log(createOrdersCollection);
