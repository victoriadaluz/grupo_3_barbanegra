const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productDB.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('home',{
            productsInSale
        })
    },
    carrito: (req,res)=>{
        res.render('product-car',{title:'Carrito-Barbanegra'})
    },
    detail:(req,res)=>{
        res.render('detalleProducto',{title:'Detalle de producto-Barbanegra'})
    },
    admin: (req,res)=>{
        res.render('admin', {title:'Inicie sesión como administrador'})
    },
    agregarProducto: (req, res)=>{
        res.render('agregarProducto', {title: 'agregar un producto'})
    }
}
module.exports = controller;
        