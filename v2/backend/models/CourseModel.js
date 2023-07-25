const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');
const User = require('./UserModel.js');

const Course = db.define('courses', {
  courseid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseStream: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursesubject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursebanner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseprofile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursedes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  courseprice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  freezeTableName: true
});

User.hasMany(Course);
Course.belongsTo(User);

module.exports = Course;

(async () => {
  await db.sync();
})();
