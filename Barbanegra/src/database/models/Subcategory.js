 module.exports = (sequelize, Datatypes) =>{
    let alias= 'Subcategory';
    let cols={
        id : {
            type : Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: Datatypes.STRING,
            allowNull:false,
        },
        categoryId:{
            type: Datatypes.INTEGER,
            allowNull:false,
        }
    } 
     let config = {
        tableName: 'subcategory',
        timestamps: false
    }
    const Subcategory = sequelize.define(alias,cols,config);
    //relaciones
    Subcategory.associate = models=>{
        Subcategory.hasMany(models.Product,{
            as:'products',//tiene muchos productos
            foreignKey:'subcategoryId'//recibe la fk de products (de donde viene la fk)
        })
        Subcategory.belongsTo(models.Category,{
            as:'category',
            foreignKey:'categoryId'
        })
    }
     return Subcategory;
    }