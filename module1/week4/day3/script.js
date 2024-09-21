const petsArray = [
  {
    name: "Babush",
    age: 6,
    owner: "Nado",
    type: "Cat",
  },
  {
    name: "Buddy",
    age: 12,
    owner: "Joshua",
    type: "Dog",
  },
  {
    name: "Ragnar",
    age: 3,
    owner: "Joshua",
    type: "Dog",
  },
];
const recipes = [
  {
    name: "pizza",
    cookingTime: 15,
    ingredients: "flour, tomato, pepp",
  },
  {
    name: "coffee",
    cookingTime: 3,
    ingredients: "coffe, water",
  },
  {
    name: "salad",
    cookingTime: 10,
    ingredients: "lettuce, chicken",
  },
];
const kart = [
  {
    title: "hat",
    price: 25,
    color: "blue",
  },
  {
    title: "t-shirt",
    price: 15,
    color: "white",
  },
  {
    title: "socks",
    price: 5,
    color: "gray",
  },
];
//.map always returns a new array of the same length
//.map takes one arugment that is
const petNames = petsArray.map((onePet) => {
  //   console.log("the current element", onePet);
  return onePet.name;
});
console.log("pet names array", petNames);
const allIng = recipes.map((oneRecipe) => {
  return oneRecipe.ingredients;
});
// console.log("here are all the ings", allIng);

//************** .filter() ****************/
//take one argument the same as .map
const filteredPets = petsArray
  .filter((currentPet) => {
    if (currentPet.age <= 6) {
      return currentPet;
    } else {
      return false;
    }
  })
  .map((onePet) => {
    //   console.log("the current element", onePet);
    return onePet.name;
  });
//oneliner version of the .filter()
const oneLinerVer = petsArray
  .filter((onePet) => onePet.age >= 6)
  .map((onePet) => onePet.name);
// console.log("filtered pets", oneLinerVer);

//*****************.reduce() ***************/
// perfect for summing an array of numbers
//reduce expects two arguments, a callback function and a starting value
const nums = [1, 27, 228, 20, 3];
const total = nums.reduce((acc, currentNumber) => {
  return acc + currentNumber;
}, 0);
const subtotal = kart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
// console.log("subtotal", subtotal);

//**************.sort() ******************/
//sort takes a callback function, that function receives two arguments. One is the current element and the other is the next element
//this is descending order
nums.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
//this is ascending order
nums.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
// // console.log(nums);
// petsArray.sort((a, b) => {
//   if (a.age > b.age) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else {
//     //if the ages are the same... sort by name
//     if (a.name > b.name) {
//       return -1;
//     } else if (a.name < b.name) {
//       return 1;
//     } else {
//       0;
//     }
//   }
// });
// console.log(petsArray);
//oneliner version of sort
petsArray.sort((a, b) => b.age - a.age);
console.log(petsArray);
