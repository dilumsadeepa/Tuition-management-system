const Sequelize = require('sequelize');
const db = require('../config/Database.js');
const User = require('./UserModel.js');

const { DataTypes } = Sequelize;

const Salary = db.define('salaries', {
  s_role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  s_salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  month: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

User.hasMany(Salary);
Salary.belongsTo(User);

module.exports = Salary;

(async () => {
  await db.sync();
})();
