let db = require('../../database/models')

module.exports = {
    getProduct: (req, res)=>{
        db.Product.findAll({
            include: [{
                    association: 'productImage'
                }, {
                    association: "brand"
                },
                {
                    association: "subcategory"
                }
            ]
        })
        .then(productos => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: productos.length
                },
                data: productos
            })
        })
    }
}