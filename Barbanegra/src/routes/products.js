// ************ Require's ************
const express = require('express');
const router = express.Router();
let {listar, producto} = require('../controllers/productsController')

/* GET Products */
router.get('/', listar);

router.get('/detalle/:id', producto) 

module.exports = router;