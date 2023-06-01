const Sequelize = require('sequelize');
const db = require('../config/Database.js');

const { DataTypes } = Sequelize;

const Salarypresent = db.define('salarypresents', {
  userrole: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  presentage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

module.exports = Salarypresent;

(async () => {
  await db.sync();
})();
