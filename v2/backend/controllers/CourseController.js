const Course = require("../models/CourseModel.js");
const User = require("../models/UserModel.js");
const Coursestudent = require("../models/CoursestudentModel.js");
const db = require("../config/Database.js");
const { QueryTypes } = require("sequelize");


// admin

exports.getCos = async (req, res) => {
  try {
    const response = await Course.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createCourse = async (req, res) => {
  try {
    await Course.create(req.body);
    res.status(201).json({ msg: "Course Created" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.CourseData = async (req, res) => {
  try {
    const response = await Course.findAll({
      include: [User],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await Course.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.CourseDataId = async (req, res) => {
  const courseId = req.params.id;

  try {
    const response = await Course.findAll({
      where: { id: courseId },
      include: [User],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.CourseDatasub = async (req, res) => {
  const courseId = req.params.id;

  try {
    const response = await Course.findAll({
      where: { courseStream: courseId },
      include: [User],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    await Course.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Course Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCoursesByTeacherId = async (req, res) => {
  const teacherId = req.params.teacherId;

  try {
    const response = await Course.findAll({
      include: [
        {
          model: User,
          where: { id: teacherId },
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.stucourseall = async (req, res) => {
  try {
    const response = await Coursestudent.findAll({
      include: [User, Course],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};


exports.getStudentsByCourseIds = async (req, res) => {
  // Convert the comma-separated string to an array
  const courseIds = req.params.courseIds.split(",").map(Number);

  const sql =
  "SELECT cs.*, u.fullname AS student_name,u.address AS student_address, u.email AS student_email, u.tel AS student_tel " +
  "FROM coursestudents cs " +
  "JOIN users u ON cs.userId = u.id " +
  "WHERE cs.courseId IN (" + courseIds.join(",") + ");";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getunascourses = async (req, res) => {
  // Convert the comma-separated string to an array
  const id = req.params.id;

  const sql = "SELECT courses.*, coursestudents.* FROM coursestudents JOIN courses ON coursestudents.courseId = courses.id AND coursestudents.userId = '"+id+"' GROUP BY courses.id";

  try {
    const response = await db.query(sql, { type: QueryTypes.SELECT });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};



