const Sequelize = require('sequelize')
const sequelize = require('./utils/database')

const member = sequelize.define('Members', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING
    })

module.exports=member
