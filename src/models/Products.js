import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      validate: {
        validator(v) {
          const regexRule = /^[^0-9]/;
          return (regexRule.test(v));
        },
        message: (props) => `${props.value} não é um nome válido!`,
      },
      required: true,
      minLength: 3,
    },
    slug: {
      type: String,
      validate: {
        validator(v) {
          const regexRule = /[^a-zA-Z0-9 -]/;
          return !(regexRule.test(v));
        },
        message: (props) => `${props.value} não é um slug válido!`,
      },
      required: true,
    },
    preco: {
      type: mongoose.Decimal128,
      min: 1,
      required: true,
    },
    quantidade: {
      type: Number,
      min: 1,
      max: 10000,
      required: true,
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    descricao: {
      type: String,
      required: true,
      minLength: 10,
    },
  },
);

const Products = mongoose.model('products', productsSchema);

export default Products;
