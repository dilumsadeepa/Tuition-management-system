const Payment = require('../models/PaymentModel.js');

const getPays = async (req, res) => {
  try {
    const response = await Payment.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getPaysByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    // Assuming Payment is the Sequelize model for payments
    const payments = await Payment.findAll({
      where: {
        suid: id,
      },
    });

    if (!payments || payments.length === 0) {
      // If no payments are found for the given user_id, return an empty array
      return res.status(404).json({ error: 'No payments found for the user' });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  getPays,
  getPaysByUserId,
};
