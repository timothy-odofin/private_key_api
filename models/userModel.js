const { connection } = require('../utils/userUtilDb');
const { Sequelize } = require('sequelize');


exports.User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },


});

exports.Keystore = connection.define('keystore', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    keyValue: { type: Sequelize.STRING, allowNull: true },
    keyType: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },


});
