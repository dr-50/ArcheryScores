const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bow extends Model {}

Bow.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        frontbarlength: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frontbarlengthUOM: {
            type: DataTypes.STRING,
            allowNull: true
        },
        frontbarweight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        frontbarweightUOM: {
            type: DataTypes.STRING,
            allowNull: true
        },
        backbarlength: {
            type: DataTypes.INTEGER, 
            allowNull: true
        },
        backbarlengthUOM: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        backbarweight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        backbarweightUOM: {
            type: DataTypes.STRING,
            allowNull: true
        },
        scopename: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        magnification: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        drawweight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        drawlength: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        drawlengthUOM: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bow'
    }
);

module.exports = Bow;