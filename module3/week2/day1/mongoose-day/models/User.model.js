//import the Schema and model from mongoose
const { Schema, model } = require("mongoose");
// const mongoose= require('mongoose')
//define the shape of the data that we want
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  age: Number,
  pets: {
    type: [Schema.Types.ObjectId],
    ref: "pet",
  },
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
