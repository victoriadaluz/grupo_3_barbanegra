let express = require('express');
let router = express.Router();
let controller = require('../controllers/api/apiSearch.js')

router.get('/productos', controller.getProduct);
module.exports = router;