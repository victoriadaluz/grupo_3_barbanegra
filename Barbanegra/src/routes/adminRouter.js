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
    let upload = require('../middlewares/uploadFiles')

/* GET Index / Index del admin */
router.get('/', index)
router.get ('/productos',listarProductos)

/* GET- FORMULARIO DE AGREGAR PRODUCTO*/
router.get('/agregarProducto', addProducts)

/* POST- FORMULARIO DE PRODUCTO  */
router.post('/agregarProducto', upload.array('image'), uploadNewProduct)

/*ELIMINAR producto */
router.delete('/eliminarProducto/:id', deleteProduct)

//EDITAR PRODUCTO
router.get('/productos/editar/:id', editarProducto); //traigo de bd el item que requiere por :id
router.put('/productos/editar/:id', upload.array('image'), editarProductoID); //de tocar boton editar se activa PUT ojo con eso!



module.exports = router;