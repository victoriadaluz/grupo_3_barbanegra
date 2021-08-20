let fs = require('fs');
const path = require('path');

module.exports = {
    //chic@s pedi a path por que era la unica forma que me ande correctamente y me sobre escriba 
    
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/productDB3.json"), "utf-8")),
    categories: JSON.parse(fs.readFileSync(path.join(__dirname, "/subcategories.json"), "utf-8")),
    addProduct: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/productDB3.json"), JSON.stringify(dataBase), "utf-8")
    }
}