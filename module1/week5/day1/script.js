//elements from HTML
//grab the button with the id of 'background-btn'
// const backgroundBtnElement = document.querySelector("#background-btn");
const backgroundBtnElementWithId = document.getElementById("background-btn");
const changeBtn = document.querySelector("#change-btn");

//query selector with an id
const startBtn = document.querySelector("#start-btn");
//query selector with a class
const divCardElement = document.querySelector(".some-class-name");
//query selector with a tag
const h1Element = document.querySelector("h1");

const goBackBtn = document.querySelector("#go-back-btn");
const bodyElement = document.querySelector("body");
const h2Element = document.querySelector("h2");

//getElementById is the most specific way to grab elements
const firstScreenElement = document.getElementById("first-screen");
const secondScreenElement = document.getElementById("second-screen");
const nameInputElement = document.getElementById("name-input");
const petListElement = document.getElementById("pets-list");

//adding li to the ul on a loop
const arrayOfPets = ["Ragnar", "Babush", "Buddy", "Reaper", "Leo", "Saleen"];
//here is the loop
for (let i = 0; i < arrayOfPets.length; i++) {
  const currentPet = arrayOfPets[i];
  //first
  const newPetDiv = document.createElement("div");
  //this is using innerHTML instead of innerText
  newPetDiv.innerHTML = `
  <h3>${currentPet}</h3> 
  <button class='delete-btn'>Delete</button>`;

  //********************************** */
  //   const petH3Element = document.createElement("h3");
  //   const petDeleteButton = document.createElement("button");
  //   //second
  //   petH3Element.innerText = currentPet;
  //   petDeleteButton.innerText = "Delete";
  //   petDeleteButton.setAttribute("class", "delete-btn");

  //third
  //   newPetDiv.appendChild(petH3Element);
  //   newPetDiv.appendChild(petDeleteButton);
  newPetDiv.classList.add("pet-div");
  petListElement.appendChild(newPetDiv);
  const petDeleteButton = document.querySelector(".delete-btn");
  petDeleteButton.addEventListener("click", () => {
    console.log("delete clicked");
    newPetDiv.remove();
  });
}

//now that we have the button, lets add an event listener to it
//first take the variable and .addEventListener
backgroundBtnElementWithId.addEventListener("click", () => {
  console.log("the button was clicked!!!");
  bodyElement.classList.toggle("blue");
  //you could add the class blue and remove the class yourself, but toggle is better here
});

h2Element.addEventListener("click", () => {
  console.log("the h2 was clicked! Nice work");
  h1Element.innerText = "Hello Ironhackers!";
});
changeBtn.addEventListener("click", () => {
  console.log("change button clicked");
  h1Element.innerText = "Ragnar says HI :)";
  h1Element.style.color = "white";
});
startBtn.addEventListener("click", () => {
  //this is hiding the first screen and showing the second
  firstScreenElement.style.display = "none";
  secondScreenElement.style.display = "block";

  //this is grabbing what was typed into the input and storing it in a variable
  const user = nameInputElement.value;
  //this creates a JS variable the is a created element which is an h2
  const newH2Element = document.createElement("h2");
  //this is setting the innertext of that element to be what we want
  newH2Element.textContent = `${user}'s Page`;
  //this is actually adding the element to the DOM(webpage) visually
  secondScreenElement.appendChild(newH2Element);
});
goBackBtn.addEventListener("click", () => {
  firstScreenElement.style.display = "block";
  secondScreenElement.style.display = "none";
});
