use('ecomm');

db.runCommand({
  collMod: 'accounts',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Conta do usuário',
      required: [
        '_id',
        'nome',
        'email',
        'senha',
        'dataCriacao',
        'cpf',
        'telefone',
        'endereco',
      ],
      properties: {
        _id: {
          description: 'Identificador único para cada conta',
          bsonType: 'objectId',
        },
        nome: {
          bsonType: 'string',
          description: 'Insira o nome do usuário',
          minLength: 5,
        },
        email: {
          bsonType: 'string',
          minLength: 5,
          // eslint-disable-next-line no-useless-escape
          pattern: '/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm',
          description: 'Insira o email do usuário',
        },
        senha: {
          bsonType: 'string',
          minLength: 5,
          description: 'insira a senha do usuário',
        },
        dataCriacao: {
          bsonType: 'date',
          description: 'insira a data da criação da conta',
        },
        cpf: {
          bsonType: 'string',
          minLength: 11,
          pattern: '^\\d{11}$',
          maxLength: 11,
        },
        telefone: {
          bsonType: 'string',
          pattern: '^[0-9]{10,}$',
          minLength: 10,
        },
        endereco: {
          bsonType: 'object',
          required: [
            'bairro',
            'rua',
            'numero',
            'cep',
            'cidade',
            'uf',
          ],
          properties: {
            bairro: {
              bsonType: 'string',
              minLength: 1,
            },
            rua: {
              bsonType: 'string',
              minLength: 1,
            },
            numero: {
              bsonType: 'string',
              pattern: '^(\\d+|S\\/N)$',
              minLength: 1,
            },
            cep: {
              bsonType: 'string',
              minimum: 8,
              pattern: '^d{3}d{5}$',
              maximum: 8,
            },
            cidade: {
              bsonType: 'string',
              minLength: 5,
            },
            uf: {
              bsonType: 'string',
              pattern: '^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$',
              minLength: 2,
              maxLength: 2,
            },
            complemento: {
              bsonType: 'string',
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
});
