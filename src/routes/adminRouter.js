let express = require('express');
let router = express.Router();
let { producto, 
    listarProductos, 
    addProducts, 
    uploadNewProduct, 
    index,
    editForm,
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
router.delete('/eliminarProducto:id', deleteProduct)
/* 


router.get('/agregarProducto', formAgregarProducto);

router.post('/agregarProducto', agregarProducto);


router.get('/editarSucursal/:id', editForm); */
/* PUT - Recibe los datos de edicion */
/* router.put('/editarSucursal/:id', editarProducto); */


module.exports = router;