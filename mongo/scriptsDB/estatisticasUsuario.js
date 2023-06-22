use('ecomm');

const userObjectID = ObjectId('64832eb321d412f6315c5afa');

const estatisticas = db.orders.aggregate(
  [{
    $match: { _id: userObjectID },
  },
  {
    $unwind: { path: '$itens' },
  },
  {
    $addFields: {
      QuantidadeDeItens: '$itens.quantidade',
      montanteDoPedido: { $multiply: ['$itens.quantidade', '$itens.precoUnitario'] },
      montanteDesconto: '$desconto',
    },
  },
  {
    $group: {
      _id: userObjectID,
      quantidadeTotalDeItens: { $sum: '$QuantidadeDeItens' },
      montanteTotalDePedidos: { $sum: '$montanteDoPedido' },
      montanteTotalDeDesconto: { $sum: '$montanteDesconto' },
    },
  }],
);

console.log(estatisticas);
