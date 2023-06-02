const User = require("../models/UserModel.js");

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

module.exports = {
  getTes,
  createTeacher,
  getTeacherById,
};
