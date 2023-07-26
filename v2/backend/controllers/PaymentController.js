const Payment = require('../models/PaymentModel.js');
const db = require("../config/Database.js");
const { QueryTypes } = require("sequelize");


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

const getuserid = async (req, res) => {
  // Convert the comma-separated string to an array
  const id = req.params.id;

  const sql = "SELECT courses.*, payments.* FROM payments JOIN courses ON payments.cid = courses.id WHERE payments.suid ="+id;

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getpayemtsbyparent = async (req, res) => {
  // Convert the comma-separated string to an array
  const id = req.params.id;

  const sql = "SELECT courses.coursename,courses.coursesubject, parentstudents.*,payments.*,users.username FROM parentstudents JOIN payments ON parentstudents.studentId = payments.suid JOIN courses ON payments.cid = courses.id JOIN users ON parentstudents.studentId = users.id WHERE parentstudents.parentId ="+id;

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


const getpayemtsbystdid = async (req, res) => {
  // Convert the comma-separated string to an array
  const id = req.params.id;

  const sql = "SELECT courses.coursename,courses.coursesubject, parentstudents.*,payments.*,users.username FROM parentstudents JOIN payments ON parentstudents.studentId = payments.suid JOIN courses ON payments.cid = courses.id JOIN users ON parentstudents.studentId = users.id WHERE payments.suid ="+id;

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getStudentsPayeBystdid = async (req, res) => {
  const id = req.params.id;

  const sql =
  "SELECT attendances.*,courses.coursename,courses.coursesubject from attendances JOIN courses ON attendances.acourseid = courses.id WHERE attendances.auserid = "+id;

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  getPays,
  getPaysByUserId,
  getuserid,
  getpayemtsbyparent,
  getpayemtsbystdid
};




