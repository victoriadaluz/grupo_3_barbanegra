let {
    products
} = require('../data/dataBase'); //requiero base de datos parseada

let productController = {
    listar: (req, res) => {
        res.render('productos', {
            products
        })
    },
    //este metodo lista y permite las vistas parametrizadas al hacer click en el producto
    producto: (req, res) => {
        let producto = products.find(producto => {
            return producto.id === +req.params.id
        })
        res.render('product-detail', {
            producto
        })
    }
}

module.exports = productController