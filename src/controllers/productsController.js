let {
    dbParseado
} = require('../data/dataBase'); //requiero base de datos parseada

let productController = {
    listar: (req, res) => {
        res.render('productos', {
            dbParseado
        })
    },
    producto: (req, res) => {
        let producto = dbParseado.find(producto => {
            return producto.id === +req.params.id
        })
        res.render('product-detail', {
            producto
        })
    }
}

module.exports = productController