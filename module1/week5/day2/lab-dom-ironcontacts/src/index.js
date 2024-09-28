// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
//this is the bonus
buttonAddRandom.addEventListener("click", () => {
  console.log("clicked");
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const myRandomContact = splicedArr[0];
  const myExampleRow = document.createElement("tr");
  myExampleRow.innerHTML = `
  <td>
    <img src="${myRandomContact.pictureUrl}" />
  </td>
  <td> ${myRandomContact.name} </td>
  <td> ${myRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(myExampleRow);
});
// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `

  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>

`;

tableBody.appendChild(exampleRow);
const randomDeleteBtn = document.querySelector(".btn-delete");
randomDeleteBtn.addEventListener("click", () => {
  exampleRow.remove();
});
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
//make a loop to go over the contacts and add to the page
threeContacts.forEach((oneContact) => {
  const myRow = document.createElement("tr");
  myRow.innerHTML = `

  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>

`;

  tableBody.appendChild(myRow);
  //this creates a variable for the delete button and then listens to it
  const ourDeleteBtn = myRow.querySelector(".btn-delete");
  ourDeleteBtn.addEventListener("click", () => {
    myRow.remove();
  });
  //this creates a variable for the like button and listens
  const likeBtn = myRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
