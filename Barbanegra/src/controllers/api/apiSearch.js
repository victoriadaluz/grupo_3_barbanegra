let db = require('../../database/models')
const getUrl = (req) => req.protocol +"://" +req.get("host") + req.originalUrl



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
                    endPoint: getUrl(req),
                    status: 200,
                    total: productos.length
                },
                data: productos
            })
        })
    }
}