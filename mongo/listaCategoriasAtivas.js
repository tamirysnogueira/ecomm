use("ecomm");

const categoriesActivated = db.categories.find({"status": "ATIVA"}, {"_id": 0});

console.log(categoriesActivated);