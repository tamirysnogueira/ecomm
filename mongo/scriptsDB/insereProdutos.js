import productsJSON from '../products/ecomm-products.json';

use('ecomm');

forEach((product) => {
  if (Object.hasOwn(product, 'preco')) {
    const objectProduct = product;
    const tranformPriceToDecimal = NumberDecimal(product.preco.toFixed(2));
    objectProduct.preco = tranformPriceToDecimal;
  }
});

const insertProductsInDb = db.products.insertMany(productsJSON);

console.log(insertProductsInDb);
