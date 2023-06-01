const Payment = require('../models/PaymentModel.js');

const getPays = async (req, res) => {
  try {
    const response = await Payment.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getPays,
};
