const {    Router} = require('express');
const router = Router();
const fs = require('fs');
let {
    products
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
    delete: (req, res) => {
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