const User = require("../models/UserModel.js");
const { QueryTypes } = require("sequelize");
const Course = require("../models/CourseModel.js");
const Coursestudent = require("../models/CoursestudentModel.js");
const db = require("../config/Database.js");

const getsts = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Admin

const getStuData = async (req, res) => {
  const sesql =
    "SELECT users.*, students.* FROM users INNER JOIN students ON users.id=students.userid";
  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getStudentById = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT users.*, students.* FROM users INNER JOIN students ON users.id=students.userid WHERE users.id = '" +
    id +
    "';";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getCourseById = async (req, res) => {
  const id = req.params.id;

  const sesql =
    "SELECT c.* FROM courses c INNER JOIN coursestudents cs ON cs.courseId = c.id INNER JOIN students s ON s.id = cs.studentId INNER JOIN users u ON u.id = s.userId WHERE u.id = '" +
    id +
    "';";

  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getStudentcourseId = async (req, res) => {
  const id = req.params.id;

  const sesql =
    "SELECT c.id FROM courses c INNER JOIN coursestudents cs ON cs.courseId = c.id INNER JOIN students s ON s.id = cs.studentId INNER JOIN users u ON u.id = s.userId WHERE u.id = '" +
    id +
    "';";

  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllStudentqr = async (req, res) => {
  const id = req.params.id;

  const sesql =
    "SELECT s.userId AS userid, GROUP_CONCAT(c.id) AS courses FROM students s INNER JOIN coursestudents cs ON s.id = cs.studentId INNER JOIN courses c ON c.id = cs.courseId GROUP BY s.userId; ";

  try {
    const response = await db.query(sesql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Student

const createStudent = async (req, res) => {
  try {
    console.log(req.body);
    await User.create(req.body);
    res.status(201).json({ msg: "Students Created" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getsts,
  getStuData,
  getStudentById,
  getCourseById,
  getStudentcourseId,
  getAllStudentqr,
  createStudent,
};
