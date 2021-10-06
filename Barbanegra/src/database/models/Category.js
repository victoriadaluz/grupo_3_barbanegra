 module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: 'category',
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config);
    Category.associate = models=>{
        Category.hasMany(models.Subcategory,{
            as:'subcategory', //tiene muchas subcategorias 
            foreignKey:'categoryId'
        })
    }
    return Category;
} 