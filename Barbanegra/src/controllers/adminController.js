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
                    session: req.session.user ? req.session.user : ""

                })
            })
    },
    addProducts: (req, res) => {
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
        let category = Category.findAll()
        let subcategory = Subcategory.findAll()
        let brand = Brand.findAll()
        Promise.all([category, subcategory, brand])
            .then(([category, subcategory, brand]) => {

                res.render('admin/agregarProducto', {
                    category,
                    subcategory,
                    brand,
                    session: req.session.user ? req.session.user : ""
                })
            })
    },
    uploadNewProduct: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }
            let {
                name,
                brand,
                price,
                discount,
                category,
                subcategory,
                description
            } = req.body
            Product.create({
                name,
                brandId:brand,
                price,
                discount,
                category,
                subcategoryId:subcategory,
                description
            }).then(product => {
                if (arrayImages.length > 0) {
                    let images = arrayImages.map(image => {
                        return {
                            image: image,
                            productId: product.id,
                        }
                    })
                    ProductImage.bulkCreate(images)
                        .then(() => res.redirect('/admin'))
                        .catch(err => console.log(err))
                }
            }).catch(err => console.log(err))
        } else {
            res.send(errors)
            let category = Category.findAll()
            let subcategory = Subcategory.findAll()
            let brand = Brand.findAll()
            Promise.all([category, subcategory, brand])
                .then(([category, subcategory, brand]) => {
                   
                    res.render('admin/agregarProducto', {
                        category,
                        subcategory,
                        brand,
                        errors: errors.errors,
                        session: req.session.user ? req.session.user : ""
                    })
                }).catch(err => console.log(err))
        }//chequar array de imagenes
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
        let arrayImage = []
        if (req.files) {
            req.files.forEach(img => {
                arrayImage.push(img.filename)
            })
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
                brandId: brand,
                price,
                discount,
                subcategoryId: subcategory

            }, {
                where: {
                    id: req.params.id,
                },
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
            .then((producto) => {
                if (req.files) {
                    if (arrayImage.length = 1) {
                        ProductImage.update({
                            image: arrayImage[0]
                        }, {
                            where: {
                                productId: +req.params.id
                            }
                        })
                    } else if (arrayImage.length > 2) {
                        ProductImage.destroy({
                                where: {
                                    productId: +req.params.id
                                }
                            })
                            .then(() => {
                                let images = arrayImage.map(imagen => {
                                    res.send(images)
                                    return {
                                        image: imagen,
                                        productId: +req.params.id
                                    }

                                })
                                ProductImage.bulkCreate(images)
                                    .then((images) => {
                                        res.send(images)
                                    })


                            })
                    }




                }


                res.redirect("/admin")
            })
            .catch(err => console.log(err))

    },




    deleteProduct: (req, res) => {
        Product.destroy({
            where: {
                id: +req.params.id
            }
        })
        res.redirect("/admin")

    }

}