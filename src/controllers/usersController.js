let productsDB = require('../data/dataBase')
const { name, carousel } = productsDB

module.exports = {
    login: (req,res)=>{
    res.render('loginRegistro',{title:'Login-Barbanegra'})
    },
}