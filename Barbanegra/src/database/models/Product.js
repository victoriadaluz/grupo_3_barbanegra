const {
    DataTypes
} = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
        },
        image_id: {
            type: DataTypes.INTEGER,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subcategory_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
     };
        const Product = sequelize.define(alias, cols);
        //relacion con subcategory
        Product.associate = models => {
            Product.belongsTo(models.Subcategory, {
                as: 'subcategory',
                foreignKey: 'subcategory_id'
            })        
            Product.belongsTo(models.Brand, {
                as: 'brand',
                foreignKey: 'brand_id'
            })        
                Product.hasMany(models.Image,{
                as:'image',
                foreignKey: 'image_id'
            })
        }
    return Product;
}