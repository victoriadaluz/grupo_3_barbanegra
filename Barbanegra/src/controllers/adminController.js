let { products, addProduct,categories} = require('../data/dataBase');
const { validationResult } = require('express-validator');
const fs = require('fs')
const {Product} = require('../database/models')

module.exports = {
    index: (req, res) => {
        res.render('admin/admin', {
            title: 'Admin-Barbanegra',
            session:req.session.user?req.session.user:""
        })
    },
    listarProductos: (req, res) => {
        Product.findAll({
            include:[{association:'productImage'},{association:"brand"},
            {association:"subcategory"}]
        })
        .then(producto =>{
          
            
          res.render('admin/adminProductos',{
            producto,
              session:req.session,
             
          })
        })
    },
    addProducts: (req,res) =>{
        res.render('admin/agregarProducto',{
            session:req.session.user?req.session.user:""
        })
        
    },
    uploadNewProduct: (req,res) =>{
        let lastID = 1
        products.forEach(product =>{
            if(product.id > lastID){
                lastID = product.id
            }
        });
        let arrayImages = [];
        if (req.files){
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
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
            image : arrayImages.length > 0 ? arrayImages: ['default-img.jpg']
        };
        
    
    products.push(newProduct);
    addProduct(products);
    res.redirect('/admin/productos')
    },
    editarProducto: (req, res) =>{        
        let productoAEditar = products.find(productoAEditar => productoAEditar.id === +req.params.id)
        res.render('admin/adminEditarProductos', {
            productoAEditar,
            categories,
            subcategories,
            session:req.session.user?req.session.user:""
        })
        
        
    },
    editarProductoID: (req, res) =>{
        let{name,
            brand,
            price,
            description,
            discount,
            category,
            subcategory,
            condition
           } = req.body;
           //agarramos todos los datos del formulario
           let arrayImages = [];
            if(req.files){
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }

        
           
        products.forEach(product=>{
            if(product.id === +req.params.id){
                product.id = product.id,
                product.name = name,
                product.brand =brand,
                product.price =price,
                product.description = description,
                product.discount = discount,
                product.category = category,
                product.subcategory = subcategory,
                product.condition = condition,
                product.image = arrayImages.length > 0 ? arrayImages: product.image
            }
        })
        //recogo todos los datos que coincida con el id pasado por ruta
        //y los guardo para ser sobreescritos por el metodo addProduct
        addProduct(products);
        //a revisar, cuando pushea el nuevo objeto, el precio lo envia como string y no como numero
        
        res.redirect('/admin/productos')
    },
    deleteProduct: (req, res) => {
        products.forEach(product => { //buscamos el producto a eliminar
            if(product.id === +req.params.id){
                let productToDelete = products.indexOf(product); 
                products.splice(productToDelete, 1); //una vez que lo encontramos ubicamos en el array principal y cortamos desde la posicion hasta el siguiente ([array] de 0 a 1)
                
            }
        })            
        addProduct(products); //pusheamos sin el elemento encontrado 
        res.redirect('/admin/productos')
        
       
    }
}