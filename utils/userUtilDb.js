const { Sequelize } = require('sequelize');

exports.connection = new Sequelize('private_store', 'private_user', 'ePRs8rbZzXvAwW5', {
    host: 'localhost',
    dialect: 'mysql'
})



