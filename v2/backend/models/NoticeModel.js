const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Notice = db.define('notices', {
  notice_to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notice_from: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notice_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notice_desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  files: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  localFiles: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  publicIdList: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cloudFiles: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  backup: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cloudOnly: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  freezeTableName: true
});

module.exports = Notice;

(async () => {
  await db.sync();
})();
