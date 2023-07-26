const Salarypresent = require('../models/SalarypresentModel.js');

// Admin
const getSPs = async (req, res) => {
  try {
    const response = await Salarypresent.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getSPById = async (req, res) => {
  try {
    const userrole = req.params.id;
    const response = await Salarypresent.findOne({
      where: {
        userrole: userrole,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createPre = async (req, res) => {
  try {
    await Salarypresent.create(req.body);
    res.status(201).json({ msg: "Percentage Created" });
  } catch (error) {
    console.log(error.message);
  }
};

const updateSP = async (req, res) => {
  console.log("connected");
  try {
    await Salarypresent.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Percentage Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

const deletespre = async (req, res) => {
  try {
    await Salarypresent.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Percentage Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getSPs,
  createPre,
  updateSP,
  deletespre,
  getSPById
};
