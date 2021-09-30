let {
    products
} = require('../data/dataBase'); //requiero base de datos parseada
const {Product} = require('../database/models')



let productController = {
    prueba: (req,res)=>{
        Product.findAll({
            include:[{association:'productImage'},{association:"brand"},
            {association:"subcategory"}]
        })
        .then(prueba =>{
            res.send(prueba)
        })
    },
    listar: (req, res) => {
        res.render('productos', {
            products,
            productImage,
            session:req.session.user?req.session.user:""
        })
    },
    //este metodo lista y permite las vistas parametrizadas al hacer click en el producto
    producto: (req, res) => {
        let producto = products.find(producto => {
            return producto.id === +req.params.id
        })
        res.render('detalleProducto', {
            producto,
            session:req.session.user?req.session.user:""
        })
    }
}

module.exports = productController