const PaymentPay = require("../models/PaymentPayModel");

exports.createPayment = async (req, res) => {
  try {
    const { refNumber, payment, courseId, userId } = req.body;
    const paymentPay = await PaymentPay.create({
      refNumber,
      payment,
      courseId,
      userId,
    });
    res.status(201).json(paymentPay);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create payment record' });
  }
};

exports.updatePaymentState = async (req, res) => {
  try {
    const { id, state } = req.body;
    const paymentPay = await PaymentPay.findByPk(id);
    if (!paymentPay) {
      return res.status(404).json({ error: 'Payment record not found' });
    }
    paymentPay.state = state;
    await paymentPay.save();
    res.status(200).json(paymentPay);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update payment state' });
  }
};
