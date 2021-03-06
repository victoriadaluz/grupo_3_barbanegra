let {
    products
} = require('../data/dataBase');
const { validationResult } = require('express-validator');
const fs = require('fs');
const {Product,Subcategory,Category,Brand} = require('../database/models');
const {Op} = require("sequelize");

module.exports = {
    index: (req, res) => {
        let producto= Product.findAll({
            where: {
                discount: {
                    [Op.gte]: 0
                }
            },
            include:[{association:'productImage'},{association:"brand"},
            {association:"subcategory"}]
        })
        let marcas= Brand.findAll()
        Promise.all([producto,marcas])
        .then(([producto,marcas]) =>{          
                      
          res.render('home',{
            producto,
            marcas,
            session:req.session.user?req.session.user:""
             
          })
        })
    },
    carrito: (req, res) => {
        res.render('product-cart', {
            title: 'Carrito-Barbanegra',
            session:req.session.user?req.session.user:""
            
        })
    },
    //este es para el slider (y poner ofertas con la condicion "inSale")
    productos: (req, res) => {
        let productsInSale = products.filter(product => product.condition === "inSale")
        res.render('productos', {
            productsInSale,
            title: 'productos',
            session:req.session.user?req.session.user:""
        })
    },
    aboutUs: (req, res) => {
        res.render('aboutUs', {
            title: 'Sobre nosotros',
            session:req.session.user?req.session.user:""
        })
    },
}