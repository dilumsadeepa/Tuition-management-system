import Teacher from "../models/TeacherModel.js";

export const getTes = async (req, res) => {
  try {
    const response = await Teacher.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTeacher = async (req, res) => {
  try {
    await Teacher.create(req.body);
    res.status(200).json({ msg: "Teacher Added!" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeacherById = async (req, res) => {
  const t_userid = req.params.t_userid;

  try {
    const teacher = await Teacher.findOne({
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
