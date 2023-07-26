const { DataTypes } = require('sequelize');
const db = require('../config/Database.js');
const Course = require('./CourseModel');
const User = require('./UserModel');

const PaymentPay = db.define('PaymentPay', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  refNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
    defaultValue: 'Pending',
  },
});

PaymentPay.belongsTo(Course, { foreignKey: 'courseId' });
PaymentPay.belongsTo(User, { foreignKey: 'userId' });

module.exports = PaymentPay;
