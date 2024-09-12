// console.log("hello world");

//************if else statements **********/
const dogName = "Ragnar";
const catName = "Babush";
let dogAge = 0;
// console.log("dog", dog, "age", age);
if (dogName && dogAge) {
  console.log(
    "the best dog in the world is",
    dogName,
    " and his age is",
    dogAge
  );
} else if (dogName) {
  console.log("the best dog in the world is", dogName);
} else if (catName) {
  console.log("The coolest cat is", catName);
} else {
  console.log("there is no dog or cat...");
}

//***********Switch **************/
const charName1 = "Jon";
const charName2 = "Aria";
const charName3 = "Tyrion";
let house = "";

switch (charName1) {
  case "Jon":
    house = "Targaryen";
    break;
  case "Aria":
    house = "Stark";
    break;
  case "Tyrion":
    house = "Lannister";
    break;
  default:
    house = "Not a member of a house";
}
console.log("the character is", charName1, " and their house is ... ", house);

//*******************Loops ***********/
//For loop
//syntax: (the starting point; the ending point; how much to increment on each iteration)
for (i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    // console.log("i...", i);
  }
}

//for loop in reverse
for (i = 99; i >= 0; i -= 1) {
  //   console.log("Here is the reverse i: ", i);
}

//****************FIZZ BUZZ CHALLENGE ***************/
//Write a for loop that counts from 0 - 100
//if the iteration number is ONLY divisible by 3 .... then you console.log('FIZZ')
//if the iteration number is ONLY divisible by 5 .... then you console.log('BUZZ')
//if the iteration number is divisible by 3 and by 5 .... then you console.log('FIZZ BUZZ')
//Otherwise you just log the iteration number

// for (i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else {
//     console.log(i);
//   }
// }
//*****************While loop ***************/
let counter = 11;
while (counter <= 10) {
  console.log("inside the while loop", counter);
  //   always remember to increment whatever you are checking for the while
  counter++;
}
//************do while loop ****************/
//Only difference is it will always run at least once, even if the check is false
do {
  console.log("inside the DO while loop....", counter);
  counter++;
} while (counter <= 10);
