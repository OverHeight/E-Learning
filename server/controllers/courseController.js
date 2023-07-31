const fs = require("fs");
const { Course } = require("../models/course");

const getCourse = async (req, res) => {
  try {
    const response = await Course.find();
    console.log("finding courses");
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const getCourseById = async (req, res) => {
  try {
    const response = await Course.findOne({ id: req.params.id });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getCourse,
  getCourseById,
};
