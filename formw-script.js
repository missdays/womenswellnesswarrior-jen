// const userData = {
//   name: "",
//   periodStartDate: "",
//   periodLength: "",
//   cycleLength: "",
// };


// CONTAINERS
const nameCard = document.getElementById("name-card");
const periodStartDateCard = document.getElementById("period-start-date-card");
const periodLengthCard = document.getElementById("period-length-card");
const cycleLengthCard = document.getElementById("cycle-length-card");
const CalendarSection = document.getElementById('calendar-section')
const FormSection = document.getElementById('form-section')

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
  // // Set localStorage
  // const userDataSerialized = JSON.stringify(userData);
  // localStorage.setItem("userData", userDataSerialized);
  // Scale out cycle length card
  cycleLengthCard.classList.remove("scale-in-center");
  cycleLengthCard.classList.add("scale-out-center");
  setTimeout(function () {
    // Hide cycle length card after scaled out and initiate period calculation and calendar's display
    CalendarSection.classList.remove('hide');
    FormSection.classList.add('hide');
    CalculatePeriod();
  }, 500);
});

// // Retrieve data from local storage
// const dotUserName = JSON.parse(localStorage.getItem("dot_username"));
// const dotPeriodStartDate = JSON.parse(
//   localStorage.getItem("dot_period_start_date")
// );
// const dotPeriodLength = JSON.parse(localStorage.getItem("dot_period_length"));
// const dotCycleLength = JSON.parse(localStorage.getItem("dot_cycle_length"));

// // Set user data in form if it exists in local storage
// if (dotUserName) {
//   usersName.value = dotUserName;
// }
// if (dotPeriodStartDate) {
//   periodStartDate.value = dotPeriodStartDate;
// }
// if (dotPeriodLength) {
//   periodLength.value = dotPeriodLength;
// }
// if (dotCycleLength) {
//   cycleLength.value = dotCycleLength;
// }

function CalculatePeriod() {
  // Retrieve data from local storage
  const dotUserName = JSON.parse(localStorage.getItem("dot_username"));
  const dotPeriodStartDate = JSON.parse(localStorage.getItem("dot_period_start_date"));
  const dotPeriodLength = JSON.parse(localStorage.getItem("dot_period_length"));
  const dotCycleLength = JSON.parse(localStorage.getItem("dot_cycle_length"));

  //These functions calculate each event using the data from local storage
  periodEnd(dotPeriodStartDate, dotPeriodLength);
  prePeriod(dotPeriodStartDate);
  postPeriod(endinng);
  peakOvulation(endinng);

  //the code to show the calendar with the events
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'local',
    initialView: 'dayGridMonth',
    height: 400,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,multiMonthYear'
    },
    events: [
        {
            title: 'Period',
            start: dotPeriodStartDate,
            end: endinng,
            color: 'lightcoral',
            textColor: 'black',
        },
        {
            title: 'Pre-Period',
            start: preStart,
            end: preEnd,
            color: 'lightblue',
            textColor: 'black'
        },
        {
            title: 'Post-Period',
            start: postStart,
            end: postEnd,
            color: 'lightgreen',
            textColor: 'black'
        },
        {
            title: 'Peak Ovulation',
            start: peakStart,
            end: peakEnd,
            color: '#bb83bb',
            textColor: 'black'
        }
    ],
  });
  calendar.render();
};

/**
 * To calculate the end date of the period
 */
function periodEnd(startDate, lengthPeriod) {
  
  happening = new Date(startDate);
  endinng = happening.setDate(happening.getDate() + parseInt(lengthPeriod));

  return endinng;
}

/**
 * To calculate the pre-period
 */
function prePeriod(startDate) {
  
  pre = new Date(startDate);
  preEnd = pre.setDate(pre.getDate() - 1);
  preStart = pre.setDate(pre.getDate() - 1);

  return preStart, preEnd;
}

/**
 * To calculate the post-period
 */
function postPeriod(endOfPeriod) {
 
  post = new Date(endOfPeriod);
  postStart = post.setDate(post.getDate() + 1);
  postEnd = post.setDate(post.getDate() + 1);

  return postStart, postEnd;
}

/**
 * To calculate the peak ovulation
 */
function peakOvulation(endOfPeriod) {
  
  peak = new Date(endOfPeriod);
  peakStart = peak.setDate(peak.getDate() + 6);
  peakEnd = peak.setDate(peak.getDate() + 5);

  return peakStart, peakEnd;
}