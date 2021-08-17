let fs = require('fs');

let dbParseado = JSON.parse(fs.readFileSync('./src/data/productDB.JSON', 'utf-8'))

addProduct : (dataBase) => {
    fs.writeFileSync('./src/data/productDB.json', JSON.stringify(dataBase), "utf-8")
}

module.exports = dbParseado;