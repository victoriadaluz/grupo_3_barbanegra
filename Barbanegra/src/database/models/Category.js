/* module.exports = (sequelize, DataTypes) => {
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
    const Category = sequelize.define(alias,cols);
    Category.associate = models=>{
        Category.hasMany(models.Subcategory,{
            as:'Subcategorys', //tiene muchas subcategorias 
            foreignKey:'categoryId'
        })
    }
} */