use('ecomm')

db.createCollection("accounts", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Conta do usuário",
          required: [ "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco", "_id" ],
          properties: {
            _id: {
               description: 'Identificador único para cada conta',
               bsonType: 'objectId'
             },
             nome: {
                bsonType: "string",
                description: "Insira o nome do usuário",
                minLength: 5
             },
             email: {
                bsonType: "string",
                minLength: 5,
                description: "Insira o email do usuário"
             },
             senha: {
                bsonType: "string",
                minLength: 5,
                description: "insira a senha do usuário"
             },
             dataCriacao: {
                bsonType: "date",
                description: "insira a data da criação da conta"
             },
             cpf: {
                bsonType: "string",
                minLength: 11,
                maxLength: 11
             },
             telefone: {
                bsonType: "string",
                minLength: 10
             },
             endereco: {
                bsonType: "object",
                required: [ "bairro", "rua", "numero", "cep", "cidade", "uf"],
                properties: {
                    "bairro": { bsonType: "string", minLength: 1 },
                    "rua": { bsonType: "string", minLength: 1 },
                    "numero": { bsonType: "string", minLength: 1 },
                    "cep": { bsonType: "string", minLength: 8, maxLength: 8 },
                    "cidade": { bsonType: "string", minLength: 5 },
                    "uf": { bsonType: "string", minLength: 2, maxLength: 2 },
                    "complemento": { bsonType: "string" }
                },
                'additionalProperties': false
             }
          },
          'additionalProperties': false
       }
    }
 } )