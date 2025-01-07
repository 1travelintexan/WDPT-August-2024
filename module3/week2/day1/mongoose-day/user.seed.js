require("./db");
const PetModel = require("./models/Pet.model");
const UserModel = require("./models/User.model");
const newUser = {
  username: "Ragnar1",
  email: "ragnar1@ragnar.com",
  password: "1234",
  age: "38",
};
const newPet = {
  name: "Babush",
  age: 8,
  owner: "677d871c93ee6721e12a4599",
};

const arrayOfUsers = [
  {
    username: "Mirela",
    email: "Mirela@Mirela.com",
    password: "1234",
    age: 21,
  },
  {
    username: "Hernani",
    email: "Hernani@Hernani.com",
    password: "1234",
    age: 25,
  },
  {
    username: "Anna",
    email: "Anna@Anna.com",
    password: "1234",
    age: 18,
    pets: ["677d8467db8a13f18b971b68"],
  },
];

//Create a pet
// PetModel.create(newPet)
//   .then((res) => {
//     console.log("pet created! ", res);
//   })
//   .catch((err) => console.log(err));

//find a pet but populate the owner
// PetModel.findById("677d8467db8a13f18b971b68")
//   .populate("owner")
//   .then((res) => {
//     console.log("pet found! ", res);
//   })
//   .catch((err) => console.log(err));

//use the model to create a user
// UserModel.create(newUser)
//   .then((res) => {
//     console.log("user created nice work", res);
//   })
//   .catch((err) => console.log(err));

//create a bunch of users
// UserModel.insertMany(arrayOfUsers)
//   .then((res) => {
//     console.log("users were created nice work", res);
//   })
//   .catch((err) => console.log(err));

//find all users (returns an array always)
// UserModel.find()
//   .then((res) => {
//     console.log("Here are all the users", res);
//   })
//   .catch((err) => console.log(err));

//find one user
// UserModel.findOne({ username: "Joshua" })
//   .then((res) => {
//     console.log("Here are all the users", res);
//   })
//   .catch((err) => console.log(err));

//find all users
// UserModel.findById("677d871c93ee6721e12a4599")
//   .populate("pets")
//   .then((res) => {
//     console.log("Here is one user with the id", res);
//   })
//   .catch((err) => console.log(err));

//delete one user
// UserModel.findByIdAndDelete("677d7a984af46f15827aa71c")
//   .then((res) => {
//     console.log("Here is the deleted user", res);
//   })
//   .catch((err) => console.log(err));

//update one user
// UserModel.findByIdAndUpdate(
//   "677d79d00cce601a3a8e3137",
//   { password: "2222" },
//   { new: true }
// )
//   .then((res) => {
//     console.log("Here is the updated user", res);
//   })
//   .catch((err) => console.log(err));
