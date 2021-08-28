let {
    products
} = require('../data/dataBase');


module.exports = {
    index: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('home', {
            productsInSale,
            session: req.session
        })
    },
    carrito: (req, res) => {
        res.render('product-cart', {
            title: 'Carrito-Barbanegra',
            session: req.session
            
        })
    },
    //este es para el slider (y poner ofertas con la condicion "inSale")
    productos: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('productos', {
            productsInSale,
            title: 'productos',
            session: req.session
        })
    }
}