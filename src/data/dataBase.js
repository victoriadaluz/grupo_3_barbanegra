let fs = require('fs');
const path = require('path');
module.exports = {

    products: JSON.parse(fs.readFileSync('/src/data/productDB3.json', 'utf-8')),
    addProduct: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/productDB3.json"), JSON.stringify(dataBase), "utf-8")
    }
}