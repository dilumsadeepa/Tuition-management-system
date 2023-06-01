const Timetable = require('../models/NewtimetableModel.js');
const { Op } = require('sequelize');
 
exports.getNewTimetables = async (req, res) => {
  try {
    const response = await Timetable.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

exports.createNewTimetable = async (req, res) => {
  try {
    await Timetable.create(req.body);
    res.status(201).json({ msg: "Timetable Created" });
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteNewTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findOne({ where: { id: req.params.id } });
    if (!timetable) {
      return res.status(404).json({ msg: 'Timetable not found' });
    }

    await timetable.destroy();
    return res.status(200).json({ msg: 'Timetable deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

exports.viewNewTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const timetable = await Timetable.findByPk(id);
    res.status(200).json(timetable);
  } catch (error) {
    console.log(error.message);
  }
};

exports.timecourseId = async (req, res) => {
  try {
    const timeId = req.params.id;
    console.log("courseid: " + timeId);
    const timetable = await Timetable.findOne({ where: { id: timeId } });
    if (timetable) {
      res.status(200).json({ courseId: timetable.cunit });
    } else {
      res.status(404).json({ message: 'Course ID not found' });
    }
  } catch (error) {
    console.log('Error in fetching course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
