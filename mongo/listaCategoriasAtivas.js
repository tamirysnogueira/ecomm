use("ecomm");

const categoriesActivated = db.categories.find(
    {"status": "ATIVO"}
);

console.log(categoriesActivated);