const {    Router} = require('express');
const router = Router();
const fs = require('fs');
let {
    products,addProduct
} = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.render('admin/admin', {
            title: 'Admin-Barbanegra'
        })
    },
    listarProductos: (req, res) => {
        res.render('admin/adminProductos', {
            products
        })
    },
    addProducts: (req,res) =>{
        res.render('admin/agregarProducto')
    },
    uploadNewProduct: (req,res) =>{
        let lastID = 1
        products.forEach(product =>{
            if(product.id > lastID){
                lastID = product.id
            }
        })

        let{name, 
            brand,
            price,
            description,
            discount,
            category,
            subcategory,
            condition,
            } = req.body

        let newProduct = {
            id: lastID + 1,
            name, 
            brand,
            price,
            description,
            discount,
            category,
            subcategory,
            condition,
            imagen : "default-image.png"
        }
        
    
    products.push(newProduct)
    addProduct(products)
    res.redirect('/admin/adminProductos')
    },

    deleteProduct: (req, res) => {
        products.forEach(product => {
            if(product.id === +req.params.id){
                let productDestroyer = products.indexOf(products);
                productDestroyer.splice(productDestroyer, 1)
            }
        })
        writeJSON(products);

        res.redirect('/productos')
    }
}