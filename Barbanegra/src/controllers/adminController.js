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
       /*      ProductImage.destroy({
                     where: {
                         productId: req.params.id,
                     }
                 })  */
                 let arrayImage = []
                 if (req.files) {
                     req.files.forEach(img =>{arrayImage.push(img.filename)})
                 }
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
                        id: req.params.id,
                        include: [{
                            association: 'productImage'
                        }, {
                            association: "brand"
                        },
                        {
                            association: "subcategory"
                        }
                    ]
                    }
                })/* .then((productUpdate) => {
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
                        ProductImage.bulkCreate(images) */
                        .then((producto)=> {
                            if(req.files){
                                if (arrayImage.length = 1) {
                                    ProductImages.update({image:arrayImage[0]},{where:{id:+req.params.id}})
                                }else if (arrayImage.length > 2){
                                    ProductImages.destroy({where:{id:+req.params.id}})
                                        .then(()=>{
                                             let images = imgProd.map(imagen => {
                                                return {
                                                    image:imagen,
                                                    id:+req.params.id
                                                    }})
                                    ProductImages.bulkCreate(images)
                                        })
                                }
                        
                                
                                
                                
                            }
            
            
                            res.redirect("/admin/index")
                        })
                        .catch(err => console.log(err))
                    
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