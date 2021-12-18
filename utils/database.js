const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ieee', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports=sequelize