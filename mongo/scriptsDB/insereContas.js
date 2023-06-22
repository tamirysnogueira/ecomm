use('ecomm');

const inserAccounts = db.accounts.insertMany([
  {
    nome: 'Tamirys',
    email: 'tamiryssilva@pagonxt.com',
    senha: 'tamiroca22',
    dataCriacao: new Date(23, 7, 2022),
    cpf: '19979062010',
    telefone: '464548794554487',
    endereco: {
      bairro: 'aracy',
      rua: 'dona joana',
      numero: '59845',
      cep: '68927335',
      cidade: 'são carlos',
      uf: 'SP',
    },

  },
  {
    nome: 'Caierl',
    email: 'caierl@pagonxt.com',
    senha: 'ysaW791lcK',
    dataCriacao: new Date(23, 7, 2022),
    cpf: '30915267047',
    telefone: '464548794554487',
    endereco: {
      bairro: 'Vila Valqueire',
      rua: 'Rua B',
      numero: '55658',
      cep: '21330584',
      cidade: 'Rio de Janeiro',
      uf: 'RJ',
    },

  },
  {
    nome: 'Leocouani',
    email: 'Leocouani@pagonxt.com',
    senha: 'YTIhOdpTXY',
    dataCriacao: new Date(23, 7, 2022),
    cpf: '04572513015',
    telefone: '5658745654154',
    endereco: {
      bairro: 'Alto São Pedro',
      rua: 'Rua Miguel de Souza',
      numero: '55658',
      cep: '12082280',
      cidade: 'Taubaté',
      uf: 'SP',
    },

  },
]);

console.log(inserAccounts);
