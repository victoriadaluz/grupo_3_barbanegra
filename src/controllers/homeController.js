let {
    products
} = require('../data/dataBase');


module.exports = {
    index: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('home', {
            productsInSale
        })
    },
    carrito: (req, res) => {
        res.render('product-cart', {
            title: 'Carrito-Barbanegra',
            
        })
    },
    //este es para el slider (y poner ofertas con la condicion "inSale")
    productos: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('productos', {
            productsInSale,
            title: 'productos'
        })
    }
}