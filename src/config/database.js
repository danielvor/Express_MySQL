const { Sequelize } = require('sequelize');
const connection = new Sequelize('mysql://root:3264@localhost:3306/controleFinanceiro');

module.exports = connection;