// Iteration 1: Names and Input
const hacker1 = "Josh";
console.log("Here is the hacker 1 name" + " " + hacker1);
const hacker2 = "aRagnar";
//the name with backticks and a injected variable is called a template literal
console.log(`Here is the hacker 2 name ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let upperCasedName = "";
for (let i = 0; i < hacker1.length; i++) {
  const currentLetter = hacker1[i];
  if (i !== hacker1.length - 1) {
    upperCasedName += currentLetter.toUpperCase() + " ";
  } else {
    upperCasedName += currentLetter.toUpperCase() + "     ";
  }
}
console.log("here is the new name", upperCasedName.trim());

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log("reversed Name ", reversedName);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("same name");
}

const longText = `Lorem et ljkaldkjf et et et`;

let wordCount = 1;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  const currentLetter = longText[i];
  const nextLetter = longText[i + 1];
  const previousLetter = longText[i - 1];
  if (currentLetter === " ") {
    wordCount++;
  }
  //this if statement only check for the word et
  if (
    currentLetter.toLowerCase() === "e" &&
    nextLetter.toLowerCase() === "t" &&
    previousLetter === " "
  ) {
    etCount++;
  }
}

//advanced method
// const longArray = longText.split(" ");
// console.log("here is the array total ", longArray.length);
console.log("et count : ", etCount);
