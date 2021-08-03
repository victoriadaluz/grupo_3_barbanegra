let productsDB = require('../data/productDB')
const { name, carousel } = productsDB

module.exports = {
    login: (req,res)=>{
    res.render('loginRegistro'),{title:'Login-Barbanegra'}},
}