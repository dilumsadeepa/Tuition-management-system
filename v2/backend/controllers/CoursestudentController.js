const Course = require('../models/CourseModel.js');
const Coursestudent = require('../models/CoursestudentModel.js');
const User = require('../models/UserModel.js');

const { Op } = require('sequelize'); // Import the Op object from Sequelize
 
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

//----------------




exports.mystucourse = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    // Assuming the student ID is available in req.user.id (you may need to adjust this depending on your authentication setup)
    

    const response = await Coursestudent.findAll({
      include: [User, Course],
      where: {
        userId: {
          [Op.eq]: id // Use [Op.eq] for equality comparison
        }
      }
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//---------------

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

//delete course student
exports.deleteCS = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCS = await Coursestudent.destroy({
      where: {
        id: id
      }
    });

    if (deletedCS === 1) {
      res.status(200).json({ msg: "Request deleted successfully" });
    } else {
      res.status(404).json({ error: "Coursestudent not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



