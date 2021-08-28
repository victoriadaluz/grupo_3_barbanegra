const {    Router} = require('express');

let {
    products, addProduct,categories
} = require('../data/dataBase');

//array de subcategorias
let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});


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
            subcategories
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