const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;
const startBtn = document.querySelector("#start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  remainingTime = 10;
  startCountdown();
});
closeToastElement.addEventListener("click", () => {
  console.log("x clicked");
  toastElement.classList.remove("show");
  clearTimeout(toastTimer);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    //this changes the JS variable
    remainingTime -= 1;
    //this actually updates the DOM to reflect the new variable
    timeElement.innerText = remainingTime;
    // console.log("inside the interval", remainingTime);
    //this if statement stops the timer when it reaches zero
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    } else if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  //this adds the class of show to the toast element so it appears
  toastElement.classList.add("show");
  console.log("toast element", toastElement);
  //this is changing the text of what the toast says
  toastMessageElement.innerText = message;

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
    startBtn.disabled = false;
  }, 2000);
}
