/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in
const myFavDessert = "jello";
const secondStrVariable = "hello";
//this is with string concatenation
const string1 = "My favorite dessert is" + " " + myFavDessert;
//this is with back ticks and this is called a template literal
const str = `This is the second string and the variable is ${secondStrVariable}`;
// console.log("here", string1);
// console.log("here is string 2", str);
// Your code here...
let pizza;
//for loop to iterate over hte string1
// for (let i = 0; i < string1.length; i++) {
//   const currentLetter = string1[i];
//   if (currentLetter === "j") {
//     pizza = i;
//   }
//   //   console.log(currentLetter);
// }
const theIndexOfJ = string1.indexOf("j");
console.log("the index of the letter J is ....", theIndexOfJ);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDfffffffffffffffffEFGHJKLO";

// Your code here...
const newVar =
  string2[2] +
  string2[string2.indexOf("O")] +
  string2[string2.length - 1] +
  string2[string2.length - 2];
console.log("here is our new variable", newVar);
/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
const batmanStr = string3.repeat(4) + " " + "Batman!";
const shaynaStr = `${string3.repeat(4)} Batman!`;
console.log("batman Str", shaynaStr);
// Your code here...

/*******************************************
       Iteration 4 | Fruit Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit =
  "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
const ourFavFruit = fruit.slice(0, 6);
const howToGrabPineapple = fruit.slice(-9);
console.log("our fav fruit", howToGrabPineapple);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";
const doesItHaveOxygen = funnyHeadline1.includes("oxygen");
//this is an if/else statement to test the variable
if (doesItHaveOxygen) {
  console.log(`The string includes the word 'oxygen'`);
} else {
  console.log(`The string does not include the word 'oxygen'`);
}
// Check the first headline
// Your code here ...

// Check the second headline
// Your code here ...

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEfffdfgkjghskljafglkdfjalkdfja;lkdfjA";

// a) Print the string length
// Your code here ...
const lengthOfStr = string4.length;
const lastChar = string4[lengthOfStr - 1];
console.log(`The length is ${lengthOfStr} and the last char is ${lastChar}`);
// b) Print the last character in the string
// Your code here ...
