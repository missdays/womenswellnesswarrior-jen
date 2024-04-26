// const userData = {
//   name: "",
//   periodStartDate: "",
//   periodLength: "",
//   cycleLength: "",
// }
//LOCAL STORAGE ARRAY
const dot_UserData = JSON.parse(localStorage.getItem("dotUserData")) || [];

// CONTAINERS
const nameCard = document.getElementById("name-card");
const periodStartDateCard = document.getElementById("period-start-date-card");
const periodLengthCard = document.getElementById("period-length-card");
const cycleLengthCard = document.getElementById("cycle-length-card");
const loadingContainer = document.getElementById("loading-container");
const displayUsername = document.getElementById("display-username");
const CalendarSection = document.getElementById('calendar-section');
const FormSection = document.getElementById('form-section');

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

window.onload = function () {
  CalendarSection.classList.add('hide')
  FormSection.classList.remove('hide')
};

// SUBMIT NAME
nameButton.addEventListener("click", () => {
  // Set user name in local storage
  const usersName_string = JSON.stringify(usersName.value);
  localStorage.setItem("dot_username", usersName_string);
  //checkUsersName();
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
  // const userDataSerialized = JSON.stringify(userData);
  // localStorage.setItem("userData", userDataSerialized);
  // Scale out cycle length card
  cycleLengthCard.classList.remove("scale-in-center");
  cycleLengthCard.classList.add("scale-out-center");
  // Show loading message
  loadingContainer.classList.remove("hide");
  loadingContainer.classList.add("text-focus-in");
  setTimeout(function () {
    storeData();
    window.location.href = "calendar.html";
  }, 500);
});

/**
 * Stores user's data in Local storage inside the dot_UserData array
 */
function storeData() {
  const userData = {
    dot_username: usersName.value,
    dot_period_start_date: periodStartDate.value,
    dot_period_length: periodLength.value,
    dot_cycle_length: cycleLength.value,
  };
  dot_UserData.push(userData);
  localStorage.setItem("dotUserData", JSON.stringify(dot_UserData));

}

/**
 * Checks for a returning user
 */
function checkUsersName() {
  
  const dotUserData = dot_UserData.map((user) => user);
  console.log(dotUserData);
  
  for (let user of dotUserData) {
    if (user.dot_username === usersName.value) {
      returingUser = user
      console.log(returingUser);
      window.location.href = "calendar.html";
    }
  };

};


