// Controller
const express = require("express");
const { getCourse, getCourseById } = require("../controllers/courseController");

const router = new express.Router();

// Router
router.get("/courses", getCourse);
router.get("/courses/:id", getCourseById);

module.exports = router;
