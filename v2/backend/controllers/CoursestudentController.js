const Course = require('../models/CourseModel.js');
const Coursestudent = require('../models/CoursestudentModel.js');
const User = require('../models/UserModel.js');
 
exports.getCSs = async (req, res) => {
  try {
    const response = await Coursestudent.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// admin

exports.stucourse = async (req, res) => {
  try {
    const response = await Coursestudent.findAll({
      include: [User, Course]
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

exports.updateCS = async (req, res) => {
  try {
    await Coursestudent.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Data Updated" });
  } catch (error) {
    console.log(error.message);
  }
}


//student

exports.createCS = async (req, res) => {
  try {
    const newCS = await Coursestudent.create(req.body);
    res.status(201).json({ msg: "Request inserted", data: newCS });
  } catch (error) {
    console.log(error.message);
  }
};


