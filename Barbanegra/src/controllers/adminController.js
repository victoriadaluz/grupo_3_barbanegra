let {
    products,
    addProduct,
    categories
} = require('../data/dataBase');
const {
    validationResult
} = require('express-validator');
const fs = require('fs')
const {
    Product,
    Subcategory,
    Category,
    ProductImage,
    Brand
} = require('../database/models')

module.exports = {
        index: (req, res) => {
            res.render('admin/admin', {
                title: 'Admin-Barbanegra',
                session: req.session.user ? req.session.user : ""
            })
        },
        listarProductos: (req, res) => {
            Product.findAll({
                    include: [{
                            association: 'productImage'
                        }, {
                            association: "brand"
                        },
                        {
                            association: "subcategory"
                        }
                    ]
                })
                .then(producto => {


                    res.render('admin/adminProductos', {
                        producto,
                        session: req.session,

                    })
                })
        },
        addProducts: (req, res) => {
            Category.findAll({
                include: [{
                    association: "subcategory"
                }]
            })
            .then(categories => {
                let subcategories = []
                categories.forEach(category => {
                    category.subcategory.forEach(subcategory => {
                        subcategories.push(subcategory)
                    })
                })
                
                res.render('admin/agregarProducto', {
                    categories,
                    subcategories,
                    session: req.session.user ? req.session.user : ""
                })
            })
            .catch(err => console.log(err))
        },
        uploadNewProduct: (req, res) => {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(imagen => {
                    arrayImages.push(imagen.filename)
                })
            }
            let {
                name,
                description,
                brand,
                price,
                discount,
                category,
                image
            } = req.body




        },
        editarProducto: (req, res) => {
            let productoAEditar = Product.findByPk(req.params.id, {
                include: [{
                        association: 'productImage'
                    }, {
                        association: "brand"
                    },
                    {
                        association: "subcategory"
                    }
                ]
            })
            let category = Category.findAll()
            let subcategory = Subcategory.findAll()
            let brand = Brand.findAll()
            Promise.all([productoAEditar, category, subcategory, brand])
                .then(([productoAEditar, category, subcategory, brand]) => {

                    res.render('admin/adminEditarProductos', {
                        productoAEditar,
                        category,
                        subcategory,
                        brand,
                        session: req.session.user ? req.session.user : ""
                    })
                })
        },
        editarProductoID: (req, res) => {
            ProductImage.destroy({
                     where: {
                         productId: req.params.id,
                     }
                 }) 
                let {
                    name,
                    description,
                    brand,
                    price,
                    discount,                    
                    subcategory,
                } = req.body;
                
                Product.update({
                    name,
                    description,
                    brandId:brand,
                    price,
                    discount,                    
                    subcategoryId:subcategory 
                    
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then((productUpdate) => {
                        res.send(productUpdate)
                        let images = [];
                        let nameImages = req.files.map((image) => image.filename);
                        nameImages.forEach((img) => {
                            let newImage = {
                                productId: req.params.id,
                                image: img
                            };
                            images.push(newImage);
                        })
                        ProductImage.bulkCreate(images)
                        .then((result)=>{
                            res.redirect('/admin/productos')
                        })
                        .catch(err => console.log(err))
                    
                    })
                },


                    
                 deleteProduct: (req, res) => {
                        products.forEach(product => { //buscamos el producto a eliminar
                            if (product.id === +req.params.id) {
                                let productToDelete = products.indexOf(product);
                                products.splice(productToDelete, 1); //una vez que lo encontramos ubicamos en el array principal y cortamos desde la posicion hasta el siguiente ([array] de 0 a 1)

                            }
                        })
                        addProduct(products); //pusheamos sin el elemento encontrado 
                        res.redirect('/admin/productos')


                    }
                }