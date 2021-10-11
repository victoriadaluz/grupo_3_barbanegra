let {
    products
} = require('../data/dataBase'); //requiero base de datos parseada
const {Product, Category} = require('../database/models')



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
    },
    category: (req, res) => {
        Category.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: "subcategory",
                include: [{
                    association: "products",
                    include: [{
                        association: "productImage"
                    }]
                }]
            }]
        })
        .then(category => {
            let subcategories = category.subcategory;
            let products = []
            subcategories.forEach(subcategory => {
                subcategory.products.forEach(product => products.push(product))
            })
            res.render('productos', {
                category,
                products,
                session:req.session.user?req.session.user:""
            })
        })
        .catch(err => console.log(err))

    }
}

module.exports = productController