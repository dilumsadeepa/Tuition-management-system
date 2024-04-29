const { Sequelize } = require('sequelize');

const db = new Sequelize('admin', 'database-1', '<Dilum>1234', {
  host: 'database-1.c7okm4qkiexq.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = db;

