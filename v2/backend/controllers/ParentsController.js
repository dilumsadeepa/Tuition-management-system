const User = require('../models/UserModel.js');
const { QueryTypes } = require('sequelize');
const db = require('../config/Database.js');

const getPas = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getPadata = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT p.*, u.* FROM parents p INNER JOIN users u ON p.puserid = u.email WHERE p.stuid = '" +
    id +
    "'";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createParent = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Parent Created" });
  } catch (error) {
    console.log(error.message);
  }
};

const getParentStu = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT s.* FROM students s INNER JOIN users u ON s.userId = u.id INNER JOIN parents p ON u.id = p.stuid WHERE p.puserid = '" +id +"'";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getattendeceAtt = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT a.acourseid, a.aday, a.atime FROM attendance a JOIN student s ON a.studentId = s.stuid JOIN courses c ON a.courseId = c.courseid WHERE s.stuid = 'student_id' AND c.courseid = 'course_id' " +
    id +
    "'";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  getPas,
  getPadata,
  createParent,
  getParentStu,
  getattendeceAtt,
};
