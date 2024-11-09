const ritualArray = ["wake up", "brush teeth", "walk Ragnar"];

//*******************with callbacks :( ******************
function doMorningRitual(oneThingIndex, callback, errorCallback) {
  if (!ritualArray[oneThingIndex]) {
    errorCallback();
  } else {
    console.log(ritualArray[oneThingIndex]);
    callback();
  }
}
// doMorningRitual(
//   0,
//   () => {
//     doMorningRitual(
//       1,
//       () => {
//         doMorningRitual(
//           6,
//           () => {
//             console.log("go to work :(");
//           },
//           () => console.log("Step does not exist")
//         );
//       },
//       () => console.log("Step does not exist")
//     );
//   },
//   () => console.log("Step does not exist")
// );

//***************Promises *************/
const ourPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("nice math!");
  } else {
    reject("go back to school");
  }
});
const ourPromise2 = new Promise((resolve, reject) => {
  if (2 + 3 === 4) {
    resolve("nice math on the second promise");
  } else {
    reject("go back to school");
  }
});
const ourPromise3 = false;
// consuming a promise
// .then and .catch
ourPromise
  .then((response) => {
    console.log("here is the response:", response);
    return ourPromise2;
  })
  .then((response2) => {
    console.log("here is the response:", response2);
  })
  .catch((error) => {
    console.log("there was an error: ", error);
  });

// ************Promises with async and await ************/
// syntax for arrow function async and await
const handlePromises = async () => {};
async function handlePromises() {
  //in all async functions, make sure to use try/catch
  try {
    const responseToFirst = await ourPromise;
    const responseToSecond = await ourPromise2;
    console.log("both were sucessful", responseToFirst, responseToSecond);
  } catch (error) {
    console.log(error);
  }
}
handlePromises();

//***********Promise.all **************/
Promise.all([ourPromise, ourPromise2, ourPromise3])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
function getRickData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(
        data.results.map((oneCharacer) => {
          return { name: oneCharacer.name, image: oneCharacer.image };
        })
      );
    })
    .catch((err) => console.log(err));
}
getRickData();
