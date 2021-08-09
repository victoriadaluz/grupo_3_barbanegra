let {getProducts} = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.render('generalProduct', {
            title: "Nuestros Productos",
            getProducts
        })
    },
    name: (req, res) =>{
        
        let name = getProducts.find(name => {
            return name.id === +req.params.id
        })
        res.render('detalleProducto',{
            title: "Nuestros productos"
        })
    }
}