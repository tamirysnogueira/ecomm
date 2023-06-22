use('ecomm');

const product = db.products.findOne(
  {
    nome: 'Galaxy Tab S8',
  },
);

const estoqueOfProduct = product.estoque;

if (estoqueOfProduct >= 2) {
  const updatedEstoqueOfProduct = db.products.updateOne(
    {
      nome: 'Galaxy Tab S8',
    },
    {
      $set: {
        estoque: estoqueOfProduct - 2,
      },
    },
  );

  console.log(updatedEstoqueOfProduct);
} else {
  console.log('Sorry, the requested quantity of items is not available.');
}
