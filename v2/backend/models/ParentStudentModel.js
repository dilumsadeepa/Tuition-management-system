const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');
const User = require('./UserModel.js');

const ParentStudent = db.define('parentstudents', {
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  freezeTableName: true
});

module.exports = ParentStudent;

(async () => {
  await db.sync();
})();
