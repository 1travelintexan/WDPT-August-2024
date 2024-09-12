//creating an array
const data = [
  "Shayna",
  "Luke",
  "Erian",
  true,
  67,
  ["Ragnar", "Babush", "Odin", "Valquiria"],
];
// console.log(data);
const NadosCat = data[5][1];
console.log("the cat", NadosCat);
//add an element to the end of the array data
data.push("Buddy");
// console.log("after push", data);
//add an element to the front of the array data
data.unshift("testing");
// console.log("after unshift", data);
//remove the last element from the array data
data.pop();
console.log("after the pop", data);
//remove the first element from the array data
data.shift();
console.log("after the shift", data);
//removing elements or just one from anywhere in the array data
//.splice needs at least two arguments with an optional third
data.splice(3, 0, "hello Teresa");
console.log("after the splice", data);
