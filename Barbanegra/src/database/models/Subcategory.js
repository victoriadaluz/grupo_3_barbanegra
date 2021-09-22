/* module.exports = (sequelize, Datatypes) =>{
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
            type: Datatypes.STRING,
            allowNull:false,
        }
    }
    const Subcategory = sequelize.define(alias,cols);
    //relaciones
    Subcategory.associate = models=>{
        Subcategory.hasMany(models.Product,{
            as:'Products',//tiene muchos productos
            foreignKey:'subcategoryId'//recibe la fk de products (de donde viene la fk)
        })
    }
    return Subcategory;
} */