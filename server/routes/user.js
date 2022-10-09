const router = require("express").Router();
const User = require("../models/user");

//create user
router.post("/create", async (req, res) => {
  const { username, bio, profilePic } = req.body;
  try {
    const user = await User.create({
      username,
      bio,
      profilePic,
    });
    user.save();
    return res.status(200).json({ msg: "Your account was created", user });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

//update user
router.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Your account was updated successfully", user });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
