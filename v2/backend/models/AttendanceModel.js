const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');
const User = require('../models/UserModel.js');

const Attendance = db.define('attendances', {
  auserid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acourseid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  atime: {
    type: DataTypes.TIME,
    allowNull: false,
  }
}, {
  freezeTableName: true
});



module.exports = Attendance;

(async () => {
  await db.sync();
})();
