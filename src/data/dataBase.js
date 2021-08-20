let fs = require('fs');
module.exports = {

    products: JSON.parse(fs.readFileSync('./src/data/productDB1.JSON', 'utf-8')),
    addProduct: (dataBase) => {
        fs.writeFileSync('./src/data/productDB1.json', JSON.stringify(dataBase), "utf-8")
    }
}