const { Sequelize } = require('sequelize');

const db = new Sequelize('encodeor_tuition', 'encodeor_tuition', '%Tuition%1234Susipwin', {
  host: 'encode99.org.lk',
  dialect: 'mysql'
});

module.exports = db;

