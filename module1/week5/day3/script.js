let userCart;
// addTwoNums(2, 4);
//this is a globally scoped variable
let name1 = "Ragnar";
//block level is inside an if statement
if (2 + 2 === 4) {
  const insideIfStatementVar = "hello there";
  name1 = "Joshua";
  //   console.log("inside the if statement", insideIfStatementVar);
}

// console.log("outside the function", userCart);

// console.log("here is the name:", name1);
//for loop
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}
//************shadowing ****************/
if (3 + 3 === 6) {
  let name1 = "Babush";
  //   console.log("inside our shadow if statement", name1);
}

//*************hoisting ***********/
//let and const will give error if used before created
//var you can use before its created but it will undefined
//functions you can where you want
let petName = "Buddy";
// console.log("hoisting example", petName);

function addTwoNums(num1, num2) {
  userCart = ["item1", "item2", "item3"];
  //   console.log("here is the function");
  return num1 + num2;
}

//*************copies ****************/
let num1 = 10;
let num2 = num1;
const arr1 = [1, 2, 3, [4, 5, 6]];
//this is the spread operator with the ...
const arr2 = [...arr1];
//this is a true deep copy
const arr3 = JSON.parse(JSON.stringify(arr1));
//with the structured clone method
const arr4 = structuredClone(arr1);
arr4[3].push("testing");
arr3[3].push(4);
// console.log(arr1, arr2, arr3, arr4);

//***************setTimeout and setInterval ************/
//setTimeout runs only once after a certain amount of time, in milliseconds
setTimeout(() => {
  console.log("this happened after some  time");
}, 2000);
//setInterval runs over and over until you tell it to stop
let timer = 0;
const intervalId = setInterval(() => {
  timer++;
  //
  console.log("timer:", timer);
  if (timer === 5) {
    //clear interval stop the interval from running
    clearInterval(intervalId);
    console.log("timer finished ");
  }
}, 1000);
