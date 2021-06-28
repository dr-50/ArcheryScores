const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scores extends Model {}

Scores.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        bowid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'bow',
                key: 'id'
            }
        },
        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        end: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        round: {
            type: DataTypes.STRING,
            allowNull: false
        },
        arrow1: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        arrow2: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        arrow3: {
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
)

module.exports = Scores