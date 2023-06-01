const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');
const Course = require('./CourseModel.js');
const User = require('./UserModel.js');

const Coursestudent = db.define('coursestudents', {
  aprovel: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

Coursestudent.belongsTo(User);
Coursestudent.belongsTo(Course);
User.hasMany(Coursestudent);
Course.hasMany(Coursestudent);

module.exports = Coursestudent;

(async () => {
  await db.sync();
})();
