const Course = require("../models/CourseModel.js");
const User = require("../models/UserModel.js");
const Coursestudent = require("../models/CoursestudentModel.js");

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
