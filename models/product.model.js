const {DataTypes}=require('sequelize');
const sequelize=require('../utilities/database');

const Product= sequelize.define(
    'product',
    {
        id:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        suggestion: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        allegations: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        vectorEmbedding: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
    }
);

module.exports=Product;