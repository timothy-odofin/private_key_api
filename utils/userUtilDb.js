const { Sequelize } = require('sequelize');

exports.connection = new Sequelize('privatekeydb', 'root', 'johnson', {
    host: 'localhost',
    dialect: 'mysql'
})



