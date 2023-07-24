const Attendance = require("../models/AttendanceModel.js");

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
    const response = await Attendance.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAttCourseId = async (req, res) => {
  try {
    const { date, id } = req.params;
    const response = await Attendance.count({
      where: {
        acourseid: id,
        aday: date,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

