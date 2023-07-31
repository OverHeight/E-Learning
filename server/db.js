const mongoose = require('mongoose');
const { User } = require("./models/user")
const { Course } = require("./models/course")

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  try {
    await mongoose.connect(process.env.DB, connectionParams);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    console.log('Could not connect to MongoDB');
  }
};
