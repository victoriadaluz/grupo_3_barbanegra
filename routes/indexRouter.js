var express = require('express');
var router = express.Router();
let controller= require('../src/controllers/homeController')


/* GET - Home */

router.get('/', controller.index);

router.get('/cart', controller.carrito);



router.get('/product-detail', controller.detail);


module.exports = router;
