//this is a comment in js
//console.log is a method that logs the output to the terminal
// console.log("Hello World");

//to create a variable in js use let or const
let name = "Ragnar";
name = "Buddy";
// console.log("My dogs name is", name);

//Math object variables
const num1 = 2.0001;
const num2 = 4.99999999;
//Math.round rounds normally
const roundedNumber = Math.round(num1);
//Math.ceil rounds up always
const roundedNumberUp = Math.ceil(num1);
//Math.floor rounds down always
const roundedNumberDown = Math.floor(num2);

// console.log("this is the rounded number", roundedNumber);
// console.log("this is the rounded number up", roundedNumberUp);
// console.log("this is the rounded number down", roundedNumberDown);
// console.log("these are the original numbers", num1, num2);
const arrayOfNumbers = [2, 4, 55, 7];
const smallestNumber = Math.min(...arrayOfNumbers);
const biggestNumber = Math.max(...arrayOfNumbers);
const randomNumber = Math.random();
//this is how to grab a random index from an array
const randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);
// console.log("smallest number", smallestNumber, "biggest number", biggestNumber);
// console.log("here is the random number", randomNumber);
// console.log("here is our random number", arrayOfNumbers[randomIndex]);

//**************String methods ***************/
let petName = "joshua";
//length has no () and returns the number of characters
const nameLength = petName.length;
//.slice method has () and needs at least one parameter to say where to start
const slicedNamed = petName.slice(0, 3);
//we need to take the petName variable and uppercase just the first letter and the add the rest lower case
const capitalPetName = petName[0].toUpperCase() + petName.slice(1);
// console.log("here is the best pet name", petName);
// console.log("here is the best pet name length", nameLength);
// console.log("here is the sliced name", slicedNamed);
console.log("here is the upper cased name", capitalPetName);

//******************cool number things **********/
let myNumber = 3;
//longer and older version
// myNumber = myNumber + 2;
// //shorter and cleaner version
// myNumber += 2;
// myNumber++;
//raised to a power
myNumber = myNumber ** 3;
//the modulo operator
let evenNumber = 12;
const isEven = evenNumber % 2 == 0;
// console.log("my number", myNumber);
// console.log("Is even", isEven);
//  && both need to be true to pass
// console.log("2 is greater than two and 100 equals 100", 2 >= 2 && 100 === 101);
//  || one needs to be true to pass
console.log("2 is greater than two and 100 equals 100", 2 >= 2 || 100 === 101);
//this is not equal too !==
console.log("2 does not equal 3", 3 !== 3);
