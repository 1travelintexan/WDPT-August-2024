const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const router = require("express").Router();
const newUser = {
  username: "Joshua",
  email: "joshua@ragnar.com",
  password: "1234",
};

//route to create a new user
router.post("/signup", async (req, res) => {
  //destructure
  const { username, email } = req.body;
  //check if the password is long enough

  try {
    //first see if there is already a user with the email
    const foundUser = await UserModel.findOne({ email });
    // if the user exists... send error
    if (foundUser) {
      res.status(403).json({ message: "email already taken" });
      //else continue creating the user.
      //first encrypt the password
      //then create the user without the original password
    } else {
      //create the salt
      const theSalt = bcryptjs.genSaltSync(12);
      //encrypt the password
      const hashedPassword = bcryptjs.hashSync(req.body.password, theSalt);

      //this is the long way, create a new variable and then store it in the DB
      // const userToCreate = {
      //   username: req.body.username,
      //   email: req.body.email,
      //   password: hashedPassword,
      // };
      const createdUser = await UserModel.create({
        ...req.body,
        password: hashedPassword,
      });
      res.status(200).json({ message: "signup successful", user: createdUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //first see if there is already a user with the email
    const foundUser = await UserModel.findOne({ email }).lean();
    // if the user exists... send error
    if (!foundUser) {
      res.status(403).json({ message: "Invalid Credentials" });
    } else {
      //make a variable that tells us if the password encrypted in the DB matches what they sent to the /login route
      const doesItMatch = bcryptjs.compareSync(password, foundUser.password);
      // console.log("does it match", doesItMatch);
      //if the passwords do NOT match then we send back an error
      if (!doesItMatch) {
        res.status(403).json({ message: "Invalid Credentials" });
        //else the passwords do match then we log in our user.
      } else {
        //remove the encrypted password from our foundUser variable
        foundUser.password = "****";
        //if the user logged in successfully, then we create a token with JWT
        const authToken = jwt.sign(
          { _id: foundUser._id, username: foundUser.username },
          process.env.TOKEN_SECRET,
          {
            algorithm: "HS256",
            expiresIn: "48h",
          }
        );
        console.log("here is the authToken", authToken);
        res.status(200).json({ message: "login successful", authToken });
      }
    }
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
    });
    console.log("here is the updated user", updatedUser);
    res.status(200).json({ updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//verify the token route
router.get("/verify", isAuthenticated, (req, res) => {
  console.log("made it to the verify route", req.payload);
  res.status(200).json({ currentUser: req.payload });
});

module.exports = router;
