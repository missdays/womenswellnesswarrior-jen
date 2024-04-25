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

// SUBMIT NAME
nameButton.addEventListener("click", () => {
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
  // Scale out period start date card
  periodStartDateCard.classList.remove("scale-in-center");
  periodStartDateCard.classList.add("scale-out-center");
  setTimeout(function () {
    // Hide period start date card after scaled out
    periodStartCard.classList.add("hide");
  }, 500);
  setTimeout(function () {
    // Show period length card with scale in
    periodLengthCard.classList.remove("hide");
    periodLengthCard.classList.add("scale-in-center");
  }, 600);
});

// SUBMIT PERIOD LENGTH
periodLengthButton.addEventListener("click", () => {
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
  // Scale out cycle length card
  cycleLengthCard.classList.remove("scale-in-center");
  cycleLengthCard.classList.add("scale-out-center");
  setTimeout(function () {
    console.log("Go to results page");
  }, 500);
});
