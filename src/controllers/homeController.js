let{dbParseado} = require('../data/dataBase');


module.exports = {
    index: (req, res) => {
        let productsInSale = dbParseado.filter(product => product.condition === "inSale")
        res.render('home',{
            productsInSale
        })
    },
    carrito: (req,res)=>{
        res.render('product-cart',{title:'Carrito-Barbanegra',
        dbParseado})
    },
    productos: (req, res)=>{
        let productsInSale = dbParseado.filter(product => product.condition === "inSale")
        res.render('productos', {productsInSale ,title : 'productos'})
    }
}

        