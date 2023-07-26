const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const User = db.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email_verified: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tel_verified: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  edlevel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  two_factor: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  resetPasswordToken:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  resetPasswordExpires:{
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  freezeTableName: true
});

module.exports = User;

(async () => {
  await db.sync();
})();
