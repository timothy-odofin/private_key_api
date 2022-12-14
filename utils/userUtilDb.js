const { Sequelize } = require('sequelize');

exports.connection = new Sequelize('private_store', 'private_user', 'pbCAQUZafg7qT3Em', {
    host: 'localhost',
    dialect: 'mysql'
})



