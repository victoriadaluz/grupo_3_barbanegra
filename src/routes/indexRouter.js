const express = require('express');
const router = express.Router();
const controller= require('../controllers/homeController')


/* GET - Home */

router.get('/', controller.index);

router.get('/cart', controller.carrito);

router.get('/product-detail', controller.detail);

router.get('/admin', controller.admin)

 router.get('/agregarProducto', controller.agregarProducto)

module.exports = router;
