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
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
        },        
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subcategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
    let config = {
        tableName: 'product',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);
    //relacion con subcategory
           Product.associate = models => {
                Product.belongsTo(models.Subcategory, {
                    as: 'subcategory',
                    foreignKey: 'subcategoryId'
                })        
                 Product.belongsTo(models.Brand, {
                    as: 'brand',
                    foreignKey: 'brandId'
                })   
                Product.hasMany(models.ProductImage, {
                    as: "productImage",
                    foreignKey: "productId"
                })     

            } 
    return Product;
}