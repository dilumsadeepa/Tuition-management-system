const ParentStudent = require('../models/ParentStudentModel.js');
const User = require('../models/UserModel.js');

// Create a new parent-student relationship
exports.createParentStudent = async (req, res) => {
    const { parentNIC, studentId } = req.body;
  
    try {
      // Find the parent's ID based on the NIC number
      const parent = await User.findOne({ where: { nic: parentNIC } });
      if (!parent) {
        return res.status(404).json({ error: 'Parent not found with the given NIC number' });
      }
  
      // Create the parent-student relationship in the ParentStudent table
      const parentStudent = await ParentStudent.create({
        parentId: parent.id,
        studentId: studentId,
      });
  
      return res.status(201).json(parentStudent);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

// Get all parent-student relationships
exports.getAllParentStudents = async (req, res) => {
  try {
    const parentStudents = await ParentStudent.findAll();
    return res.status(200).json(parentStudents);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get parent-student relationship by ID
exports.getParentStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const parentStudent = await ParentStudent.findByPk(id);
    if (!parentStudent) {
      return res.status(404).json({ error: 'Parent-student relationship not found' });
    }
    return res.status(200).json(parentStudent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.findParentByStudentId = async (req, res) => {
    const studentId = req.params.studentId;
  
    try {
      // Find the parent-student relationship by student ID
      const parentStudent = await ParentStudent.findOne({
        where: { studentId: studentId },
        include: [
          {
            model: User,
            as: 'parent', // This assumes you have defined 'parent' as the alias in the ParentStudent model
          },
        ],
      });
  
      if (!parentStudent) {
        return res.status(404).json({ error: 'Parent not found for the given student ID.' });
      }
  
      // Extract the parent data from the relationship
      const parentData = parentStudent.parent;
  
      return res.status(200).json(parentData);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  };

// Update parent-student relationship
exports.updateParentStudent = async (req, res) => {
  const { id } = req.params;
  const { parentId, studentId } = req.body;

  try {
    const parentStudent = await ParentStudent.findByPk(id);
    if (!parentStudent) {
      return res.status(404).json({ error: 'Parent-student relationship not found' });
    }

    const parent = await User.findByPk(parentId);
    const student = await User.findByPk(studentId);

    if (!parent || !student) {
      return res.status(404).json({ error: 'Parent or student not found' });
    }

    await ParentStudent.update({ parentId, studentId }, { where: { id } });
    return res.status(200).json({ message: 'Parent-student relationship updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete parent-student relationship
exports.deleteParentStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const parentStudent = await ParentStudent.findByPk(id);
    if (!parentStudent) {
      return res.status(404).json({ error: 'Parent-student relationship not found' });
    }

    await ParentStudent.destroy({ where: { id } });
    return res.status(200).json({ message: 'Parent-student relationship deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.findParentByParentId = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the parent-student relationship by student ID
    const parentStudent = await ParentStudent.findOne({
      where: { parentId: id },
      include: [
        {
          model: User,
          as: 'student', // This assumes you have defined 'parent' as the alias in the ParentStudent model
        },
      ],
    });

    if (!parentStudent) {
      return res.status(404).json({ error: 'Parent not found for the given student ID.' });
    }

    // Extract the parent data from the relationship
    const parentData = parentStudent.parent;

    return res.status(200).json(parentData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};
