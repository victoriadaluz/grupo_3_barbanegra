let productsDB = require('../data/productDB')
const { name, carousel } = productsDB

module.exports = {
    index: (req, res) => {
        res.render('home',{title:'Barbanegra'})
    },
    carrito: (req,res)=>{
        res.render('product-car',{title:'Carrito-Barbanegra'})
    },
    detail:(req,res)=>{
        res.render('detalleProducto',{title:'Detalle de producto-Barbanegra'})
    },
}
        