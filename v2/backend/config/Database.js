const { Sequelize } = require('sequelize');

const db = new Sequelize('tms', 'admin', '<Dilum>1234', {
  host: 'database-1.c7okm4qkiexq.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = db;

