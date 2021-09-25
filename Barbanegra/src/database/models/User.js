module.exports = (sequelize, DataTypes) => {
    let alias = "User"
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
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
        }
    }
     let config = {
        tableName: "users"
    }
    const User = sequelize.define(alias,cols,config)
    User.associate = models =>{
        User.hasMany(models.Addresses,{
            as:'Addresses',
            foreignKey:"userId"
        })
    }
    return User;
}