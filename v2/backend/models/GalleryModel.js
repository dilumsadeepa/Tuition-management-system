const Sequelize = require('sequelize');
const db = require('../config/Database.js');

const { DataTypes } = Sequelize;

const Gallery = db.define('gallery', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
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

module.exports = Gallery;

(async () => {
  await db.sync();
})();
