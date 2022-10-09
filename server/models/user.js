const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  bio: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
