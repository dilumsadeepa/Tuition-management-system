const User = require("../models/UserModel.js");
const { QueryTypes } = require('sequelize');
const db = require('../config/Database.js');

const getTes = async (req, res) => {
  try {
    const response = await User.findAll({
      where: {
        role: 3,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createTeacher = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "Teacher Added!" });
  } catch (error) {
    console.log(error.message);
  }
};

const getTeacherById = async (req, res) => {
  const t_userid = req.params.t_userid;

  try {
    const teacher = await User.findOne({
      where: { t_userid },
      attributes: ["id"],
    });

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ message: "Teacher not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getCourseIncome = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT p.month, COUNT(*) AS course_count, c.courseprice * COUNT(*) AS total_payment FROM payments p JOIN courses c ON p.cid = c.id WHERE p.cid = '"+id+"' GROUP BY p.month";
  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  getTes,
  createTeacher,
  getTeacherById,
  getCourseIncome
};
