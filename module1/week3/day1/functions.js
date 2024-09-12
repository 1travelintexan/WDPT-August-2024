//this is creating or 'declaring' a function with the function keyword
function petTheDog(personsName) {
  return `${personsName} pet the Dawg...`;
}
//this is creating a function with the fat arrow
// EX: const petRagnar = ()=>{}
const petRagnar = (name) => {
  return `${name} pet Ragnar...`;
};

//this is using or 'invoking' a function WITHOUT a argument
// petTheDog();
//this is using or 'invoking' a function WITH a argument
petTheDog("Nado");
const ourReturnStr = petRagnar("Cristy");
console.log(ourReturnStr);
// petTheDog("Silva");
// petTheDog("Cristy");
// petTheDog("Shayna");
// petTheDog("Mirela");

//create a function that takes two parameters that are numbers ....
//adds them together in a variable named sum and then returns those numbers added
function addTwoNums(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    const sumOfNums = num1 + num2;
    return sumOfNums;
  } else {
    return "invalid input";
  }
}
//create a function with the fat arrow syntax that subtracts two numbers
//as function keyword: function subtractTwoNums(){}
const subtractTwoNums = (num1, num2) => {
  const difference = num1 - num2;
  return difference;
};
//this is invoking the subtractTwoNums function
const ourDifference = subtractTwoNums(10, 2);
console.log("Here is the difference, ", ourDifference);
const ourFirstSum = addTwoNums(2, 6);
const ourSecondSum = addTwoNums(2, 55);
const ourThirdNum = addTwoNums(3);
console.log(ourFirstSum, ourSecondSum, ourThirdNum);
// console.log("here is the type check", typeof 333);
console.log("thkljahdfkjha", "jjjjjj", "Ragnar was here");
