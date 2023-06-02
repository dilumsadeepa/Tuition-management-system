const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Newtimetable = db.define('timetable', {
  cunit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cdate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ctime: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  hall: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true
});

module.exports = Newtimetable;

(async () => {
  await db.sync();
})();