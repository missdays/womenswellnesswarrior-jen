// CONTAINERS
const nameCard = document.getElementById("name-card");
const periodStartDateCard = document.getElementById("period-start-date-card");
const periodLengthCard = document.getElementById("period-length-card");
const cycleLengthCard = document.getElementById("cycle-length-card");

// BUTTONS
const nameButton = document.getElementById("name-button");
const periodStartDateButton = document.getElementById(
  "period-start-date-button"
);
const periodLengthButton = document.getElementById("period-length-button");
const cycleLengthButton = document.getElementById("cycle-length-button");

// USER INPUTS
const usersName = document.getElementById("users-name");
const periodStartDate = document.getElementById("period-start-date");
const periodLength = document.getElementById("period-length");
const cycleLength = document.getElementById("cycle-length");

// SUBMIT NAME
nameButton.addEventListener("click", () => {
  // Set user name in local storage
  const usersName_string = JSON.stringify(usersName.value);
  localStorage.setItem("dot_username", usersName_string);
  // Scale out name card
  nameCard.classList.add("scale-out-center");
  setTimeout(function () {
    // Hide name card after scaled out
    nameCard.classList.add("hide");
  }, 500);
  setTimeout(function () {
    // Show period start date card with scale in
    periodStartDateCard.classList.remove("hide");
    periodStartDateCard.classList.add("scale-in-center");
  }, 500);
});

// SUBMIT PERIOD START DATE
periodStartDateButton.addEventListener("click", () => {
  // Set period start date in local storage
  const periodStartDate_string = JSON.stringify(periodStartDate.value);
  localStorage.setItem("dot_period_start_date", periodStartDate_string);
  // Scale out period start date card
  periodStartDateCard.classList.remove("scale-in-center");
  periodStartDateCard.classList.add("scale-out-center");
  setTimeout(function () {
    // Hide period start date card after scaled out
    periodStartDateCard.classList.add("hide");
  }, 500);
  setTimeout(function () {
    // Show period length card with scale in
    periodLengthCard.classList.remove("hide");
    periodLengthCard.classList.add("scale-in-center");
  }, 600);
});

// SUBMIT PERIOD LENGTH
periodLengthButton.addEventListener("click", () => {
  // Set period length in local storage
  const periodLength_string = JSON.stringify(periodLength.value);
  localStorage.setItem("dot_period_length", periodLength_string);
  // Scale out period length card
  periodLengthCard.classList.remove("scale-in-center");
  periodLengthCard.classList.add("scale-out-center");
  setTimeout(function () {
    // Hide period length card after scaled out
    periodLengthCard.classList.add("hide");
  }, 500);
  setTimeout(function () {
    // Show cycle length card with scale in
    cycleLengthCard.classList.remove("hide");
    cycleLengthCard.classList.add("scale-in-center");
  }, 600);
});

// SUBMIT CYCLE LENGTH
cycleLengthButton.addEventListener("click", () => {
  // Set cycle length in local storage
  const cycleLength_string = JSON.stringify(cycleLength.value);
  localStorage.setItem("dot_cycle_length", cycleLength_string);
  // Set localStorage
  const userDataSerialized = JSON.stringify(userData);
  localStorage.setItem("userData", userDataSerialized);
  // Scale out cycle length card
  cycleLengthCard.classList.remove("scale-in-center");
  cycleLengthCard.classList.add("scale-out-center");
  setTimeout(function () {
    console.log("Go to results page");
  }, 500);
});

// To retrieve data from local storage
const dotUserName = JSON.parse(localStorage.getItem("dot_username"));
