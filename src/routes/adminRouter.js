let express = require('express');
let router = express.Router();
let { producto, 
    listarProductos, 
    addProducts, 
    uploadNewProduct, 
    index,
    editarProductoID,
    editarProducto,
    deleteProduct } = require('../controllers/adminController')

/* GET Index / Index del admin */
router.get('/', index)
router.get ('/productos',listarProductos)

/* GET- FORMULARIO DE AGREGAR PRODUCTO */
router.get('/agregarProducto', addProducts)

/* POST- FORMULARIO DE PRODUCTO  */
router.post('/agregarProducto', uploadNewProduct)

/*ELIMINAR producto */
router.delete('/eliminarProducto/:id', deleteProduct)

//EDITAR PRODUCTO
router.get('/productos/editar/:id', editarProducto); //traigo de bd el item que requiere por :id
router.put('/productos/editar/:id',editarProductoID); //de tocar boton editar se activa PUT ojo con eso!



module.exports = router;