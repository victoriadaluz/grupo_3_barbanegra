let {
    products
} = require('../data/dataBase'); //requiero base de datos parseada

let productController = {
    listar: (req, res) => {
        res.render('productos', {
            products
        })
    },
    producto: (req, res) => {
        let producto = product.find(producto => {
            return producto.id === +req.params.id
        })
        res.render('product-detail', {
            producto
        })
    }
}

module.exports = productController