const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  lecturer: { type: String, required: true },
  description: { type: String, required: true },
  details: [
    {
      mId: { type: Number, required: true },
      subject: { type: String, required: true },
      date: { type: Date, required: true },
      description: { type: String, required: true },
    },
  ],
});

const Course = mongoose.model("course", courseSchema);

module.exports = { Course };
