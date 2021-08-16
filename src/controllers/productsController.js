const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    listar: (req,res)=>{
        res.render('products',{
            products,
        })
    }
};

module.exports = productsController;