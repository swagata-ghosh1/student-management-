const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/apiRoute");

const app = express();

app.use(cors());
app.use(express.json());

// Connection to Mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("Database connection error: ", err));

app.get("/", (req, res) => {
  res.send("Student Management Backend is running!");
});

//api route
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});