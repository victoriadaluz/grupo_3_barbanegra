 let fs = require('fs');
const path = require('path');

module.exports = {
    //chic@s pedi a path por que era la unica forma que me ande correctamente y me sobre escriba 
    //dale gon genial
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/productDB3.json"), "utf-8")),
    categories: JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    addProduct: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/productDB3.json"), JSON.stringify(dataBase), "utf-8")
    },
    /*creo variable para requerir a la database de usuarios*/
    users: JSON.parse(fs.readFileSync(path.join(__dirname,"/users.json"), "utf-8")),
    newUser: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(dataBase), "utf-8")
    }
} 