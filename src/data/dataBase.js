let fs = require('fs');

let dbParseado = JSON.parse(fs.readFileSync('src/data/productDB.json', 'utf-8'))

module.exports = dbParseado;