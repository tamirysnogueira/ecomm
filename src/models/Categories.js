import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
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
    status: { type: String, required: true, enum: ['ATIVA', 'INATIVA'] },
  },
);

const Categories = mongoose.model('categories', categoriesSchema);

export default Categories;
