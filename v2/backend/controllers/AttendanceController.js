const Attendance = require("../models/AttendanceModel.js");
const { QueryTypes } = require('sequelize');
const db = require('../config/Database.js');

exports.getAtts = async (req, res) => {
  try {
    const response = await Attendance.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAttById = async (req, res) => {
  try {
    const response = await Attendance.findAll({
      where: {
        auserid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getAttCourseId = async (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT aday, COUNT(*) AS count FROM attendances WHERE acourseid = '"+id+"' GROUP BY aday";
  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getStudentsAtteBystdid = async (req, res) => {
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



