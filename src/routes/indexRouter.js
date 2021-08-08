var express = require('express');
var router = express.Router();
let controller= require('../controllers/homeController')


/* GET - Home */

router.get('/', controller.index);

router.get('/cart', controller.carrito);

router.get('/product-detail', controller.detail);

router.get('/admin', controller.admin)
module.exports = router;
