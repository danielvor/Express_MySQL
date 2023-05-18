const { DataTypes } = require('sequelize');
const database = require('../config/database.js');

const Renda = database.define('renda', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
})

module.exports = Renda;