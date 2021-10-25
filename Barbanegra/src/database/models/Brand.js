module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
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
        tableName: "brands",
        timestamps: false
    }
    const Brand = sequelize.define(alias,cols,config);
    Brand.associate = models=>{
        Brand.hasMany(models.Product,{
            as:'Brand', //tiene muchos productos 
            foreignKey:'brandId'
        })
    }
    return Brand
} 