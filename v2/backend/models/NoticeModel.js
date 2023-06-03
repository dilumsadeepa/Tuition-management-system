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
    allowNull: false,
  },
  notice_desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  file_urls: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  freezeTableName: true
});

module.exports = Notice;

(async () => {
  await db.sync();
})();
