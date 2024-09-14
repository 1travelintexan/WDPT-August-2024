//create an object
const pet = {
  "pet name": "Ragnar",
  age: 3,
  owner: {
    ownerName: "Joshua",
    location: "France",
  },
  friends: ["Joshua", "Raquel", "Dom"],
  bark: function () {
    console.log("woof woof");
  },
};
// console.log("before", pet);
// //this will update the pet name to be Ragni
// pet["pet name"] = "Ragni";
// //this will delete a property
// delete pet["pet name"];
//remove a friend from the array of friends
pet.friends.pop();
console.log(pet.friends);
// //make a new property in an object (if the property doesnt exist.... then it creates it. If it does exist, then it overwrites it)
// pet.petName = "Ragni";
// pet.petName = "Ragnar";
// console.log("after", pet);
// console.log(
//   `The pets name is ${pet["pet name"]} and his age is ${pet.age} and his owner is ${pet.owner.ownerName}`
// );

//call a method or function inside an object
pet.bark();

//for in loop over an object
//remember you cannot use a for loop
for (key in pet) {
  //this is the keys in the object
  console.log("one key", key);
  //this is the values
  console.log(`one value ${pet[key]}`);
}
