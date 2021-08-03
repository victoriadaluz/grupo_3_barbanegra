let productsDB = require('../data/productDB')
const { name, carousel } = productsDB

module.exports = {
    index: (req, res) => {
        res.render('home')
    },
    carrito: (req,res)=>{
        res.render('product-car')
    },
    detail:(req,res)=>{
        res.render('detalleProducto')
    },
}
        