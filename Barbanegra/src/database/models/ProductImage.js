module.exports = (sequelize, DataTypes) => {
    let alias = "ProductImage";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
    let config = {
        tableName: "productimage",
        timestamps: false
    }

    const ProductImage = sequelize.define(alias, cols, config)

    ProductImage.associate = models => {
        ProductImage.belongsTo(models.Product, {
            as: "product",
            foreignKey:"productId"
        })
    }

    return ProductImage;
}
