module.exports = (sequelize, DataTypes) => {
    let alias = "Users"
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        tel:{
            type: DataTypes.STRING,
        },
        image:{
            type: DataTypes.STRING
        },
        rol:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        street: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        province: {
            type: DataTypes.STRING,
        },
        number: {
            type: DataTypes.INTEGER,
        },
        postalCode: {
            type: DataTypes.INTEGER,
        },       
    }
     let config = {
        tableName: "user",
        timestamps: false,
    }
    const User = sequelize.define(alias,cols,config)   
    
    return User;
}