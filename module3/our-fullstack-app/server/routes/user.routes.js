const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticateUser = require("../middlewares/auth.middleware");
const router = require("express").Router();

//create a user route
router.post("/signup", async (req, res) => {
  try {
    //if statement to see if the user already exists
    //if statements to check if the username, email and password exists
    //if statements to use a regex

    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(req.body.password, salt);
    const hashedUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };
    const createdUser = await UserModel.create(hashedUser);
    console.log("user created", createdUser);
    res.status(201).json({ message: "user created, nice work", createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
});
//logging in a existing user
router.post("/login", async (req, res) => {
  try {
    const foundUser = await UserModel.findOne({ email: req.body.email });
    if (!foundUser) {
      res.status(403).json({ message: "Invalid Credentials" });
    } else {
      const doesPasswordsMatch = bcryptjs.compareSync(
        req.body.password,
        foundUser.password
      );
      if (doesPasswordsMatch) {
        const data = { _id: foundUser._id, username: foundUser.username };

        const authToken = jwt.sign(data, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "1h",
        });

        console.log("Here is the authToken", authToken);
        res.status(200).json({ message: "successful login", authToken });
      } else {
        res.status(403).json({ message: "Invalid Credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in the user" });
  }
});
//route to verify the token
router.get("/verify", authenticateUser, async (req, res) => {
  console.log("verify route", req.pizza);
  res.status(200).json({ message: "token is valid", currentUser: req.pizza });
});
module.exports = router;
