const router = require("express").Router();
const UserModel = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
