const router = require("express").Router();
const UserModel = require("../models/User.model");
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//route to get all the users
router.get("/all-users", (req, res) => {
  UserModel.find()
    .then((data) => {
      console.log("found the users", data);
      res.status(200).json({ allUsers: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: err });
    });
});
module.exports = router;
