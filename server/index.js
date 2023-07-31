require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Connection = require("./db");
const userRoutes = require("./routers/userRoutes");
const courseRoutes = require("./routers/courseRoutes");

// DB Connect
Connection();

// Midware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Connected to ${port}...`));
