const Salary = require('../models/SalaryModel.js');
const User = require('../models/UserModel.js');

// Admin
const getsals = async (req, res) => {
  try {
    const response = await Salary.findAll({ include: [User] });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getsals,
};
