const Sequelize = require('sequelize');
const db = require('../config/Database.js');

const { DataTypes } = Sequelize;

const Payment = db.define('payments', {
  cid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  suid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

module.exports = Payment;

(async () => {
  await db.sync();
})();
