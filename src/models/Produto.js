const {Model, DataTypes} = require('sequelize')
const connection = require('../database/index.js')

class Produto extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.DOUBLE,
            tipo: DataTypes.STRING
        }, {sequelize, freezeTableName: true})
    }
}

Produto.init(connection)

module.exports = Produto