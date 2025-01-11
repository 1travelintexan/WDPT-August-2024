const UserModel = require("../models/User.model");

const router = require("express").Router();
const newUser = {
  username: "Joshua",
  email: "joshua@ragnar.com",
  password: "1234",
};

//route to create a new user
router.post("/create-user", async (req, res) => {
  try {
    const createdUser = await UserModel.create(req.body);
    console.log("user created, nice work", createdUser);
    res.status(201).json({
      createdUser: createdUser,
      message: "nice work, user was created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//route to get all users
router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    console.log("here are all the users", allUsers);
    res.status(200).json({ allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to get one user
router.get("/one-user", async (req, res) => {
  try {
    const oneUser = await UserModel.findOne({
      _id: "6782532236a08b2f9538ad2a",
    });
    console.log("here is the user", oneUser);
    res.status(200).json({ oneUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to get one user by their _id
router.get("/one-user/:userId", async (req, res) => {
  const theUserId = req.params.userId;
  try {
    const oneUser = await UserModel.findById(theUserId);
    console.log("here is the user", oneUser);
    res.status(200).json({ oneUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to delete a user
router.delete("/delete/:userId", async (req, res) => {
  const theUserId = req.params.userId;
  try {
    const deletedUser = await UserModel.findByIdAndDelete(theUserId);
    console.log("here is the deleted user", deletedUser);
    res.status(200).json({ deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to update a user
router.patch("/update/:userId", async (req, res) => {
  const theUserId = req.params.userId;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(theUserId, req.body, {
      new: true,
      $inc: { __v: 1 },
    });
    console.log("here is the updated user", updatedUser);
    res.status(200).json({ updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
