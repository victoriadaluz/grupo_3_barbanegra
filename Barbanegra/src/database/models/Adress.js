module.exports = (sequelize, DataTypes) => {
    let alias = "Addresses";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
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
        postal_code: {
            type: DataTypes.INTEGER,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
    
    let config = {
        tableName: "addresses"
    }

    const Address = sequelize.define(alias, cols, config)

    return Address;
}