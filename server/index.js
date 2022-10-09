const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//connect to mongodb database
//this is the link from mongo db connecting to your cluster database
const mongodbUrl =
  "mongodb+srv://edwin:edwin@cluster0.fo2cl75.mongodb.net/CODING?retryWrites=true&w=majority";
mongoose.connect(mongodbUrl, (req, res, error) => {
  if (error) return res.status(404).json({ msg: error.message });
  return console.log("Connected to database.");
});

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", require("./routes/user"));

app.listen(5000, () => {
  console.log("Server connected on port 5000.");
});
