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
            
            let {
                name,
                description,
                brand,
                price,
                discount,                    
                subcategory,
            } = req.body;
            
        let arrayImages = []
        if (req.files.length > 0) {
            req.files.forEach(imagen =>{
                
                arrayImages.push(imagen.filename)
                
            })
            
        }else{
            arrayImages.push("default-image.png")
        }
        Product.create({
            name,
            description,
            brandId:brand,
            price,
            discount,                    
            subcategoryId:subcategory,
            
        })
            .then((producto)=> {
                
                let image = arrayImages.map(image => {
                    return {
                        image:image,
                        productId:producto.id
                        
                    }
                    res.send(image)
                })
                
                ProductImage.bulkCreate(image)
                
               .then(()=>{
                
                res.redirect("/admin")
               }).catch(err => console.log(err))               
                
            })
            .catch(err => console.log(err))




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
            const {
                name,
                price,
                discount,
                image,
                category,
                subCategoryId,
                description
            } = req.body
            Product.update({
                name,
                price,
                discount,
                image,
                category,
                subCategoryId,
                description
            }, {
                where: {
                    id: +req.params.id
                }
            })
            .then(() =>{
              res.redirect('/admin')
            })
            .catch(error => console.log(error))
               
        },
                    

          deleteProduct: (req, res) => {
            Product.destroy({
                 where : {
                      id : +req.params.id
                        }
                  })
                  res.redirect("/admin")

                 }

                }