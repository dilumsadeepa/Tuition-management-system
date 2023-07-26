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
    "SELECT c.coursename,p.month, COUNT(*) AS course_count, c.courseprice * COUNT(*) AS total_payment FROM payments p JOIN courses c ON p.cid = c.id WHERE p.cid = '"+id+"' GROUP BY p.month";
  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


const getTotalIncome = async (req, res) => {
  const courseIds = req.params.courseIds.split(',').map(Number);

  const sql = `
    SELECT c.id, c.coursename, SUM(c.courseprice) AS total_payment
    FROM payments p
    JOIN courses c ON p.cid = c.id
    WHERE p.cid IN (:courseIds);
  `;
  try {
    const response = await db.query(sql, {
      type: QueryTypes.SELECT,
      replacements: { courseIds },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



const getTotalStudents = async (req, res) => {
  const courseIds = req.params.courseIds.split(',').map(Number);

  const sql = `SELECT SUM(total_students) AS total_students_sum
  FROM (
      SELECT c.id AS courseId, c.coursename, c.courseStream, c.coursesubject, c.coursebanner, c.courseprofile, COUNT(cs.id) AS total_students
      FROM courses c
      LEFT JOIN coursestudents cs ON c.id = cs.courseId
      WHERE c.id IN (:courseIds)
      GROUP BY c.id, c.coursename, c.courseStream, c.coursesubject, c.coursebanner, c.courseprofile
  ) AS subquery;
  `;
  try {
    const response = await db.query(sql, {
      type: QueryTypes.SELECT,
      replacements: { courseIds },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getTotalStudentByCourse = async (req, res) => {
  const courseIds = req.params.courseIds.split(',').map(Number);

  const sql = `SELECT c.courseid AS courseId,COUNT(cs.id) AS total_students
  FROM courses c
  LEFT JOIN coursestudents cs ON c.id = cs.courseId
  WHERE c.id IN (:courseIds)
  GROUP BY c.id, c.coursename, c.courseStream, c.coursesubject, c.coursebanner, c.courseprofile;
  `;
  try {
    const response = await db.query(sql, {
      type: QueryTypes.SELECT,
      replacements: { courseIds },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};




module.exports = {
  getTes,
  createTeacher,
  getTeacherById,
  getCourseIncome,
  getTotalIncome,
  getTotalStudentByCourse,
  getTotalStudents
};
