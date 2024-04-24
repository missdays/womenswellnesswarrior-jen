const userData = {
  name: "",
  periodStartDate: "",
  periodLength: "",
  cycleLength: "",
};

// Serialize object to put into localStorage
const userDataSerialized = JSON.stringify(userData);
// Store in localStorage
localStorage.setItem("userData", userDataSerialized);
// Retrieve from localStorage
const userName = JSON.parse(localStorage.getItem("userData")).name;
const userPeriodStartDate = JSON.parse(
  localStorage.getItem("userData")
).periodStartDate;
const userPeriodLength = JSON.parse(
  localStorage.getItem("userData")
).periodLength;
const userCycleLength = JSON.parse(
  localStorage.getItem("userData")
).cycleLength;

//Variables
let ButtonToYear = document.getElementById('change-year')
let ButtonToMonth = document.getElementById('change-month')
let StartCalculation = document.getElementById('start-button')
let StartDate = document.getElementById('start-date')
let PeriodTime = document.getElementById('period-time')
let Cycle = document.getElementById('cycle')
let CalendarSection = document.getElementById('calendar-section')
let FormSection = document.getElementById('form-section')
let EditPeriod = document.getElementById('edit-period')
let UserName = document.getElementById('user-name')

//Event listeners
StartCalculation.addEventListener('click', showCalendar);
ButtonToYear.addEventListener('click', changeToYear);
ButtonToMonth.addEventListener('click', ChangeToMonth);
EditPeriod.addEventListener('click', showForm);

/** 
 * When page loads the form inputs are displayed
*/
window.onload = showForm();

function showForm() {
    CalendarSection.classList.add('hide')
    FormSection.classList.remove('hide')
};

function showCalendar() {
    FormSection.classList.add('hide')
    CalendarSection.classList.remove('hide')

    GetData();
    ChangeToMonth();
};

function ChangeToMonth() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.render();
};

function changeToYear() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'multiMonthYear',
    });
    calendar.render();
};

function GetData() {
    const userData = {
        name: UserName.value,
        periodStartDate: StartDate.value,
        periodLength: PeriodTime.value,
        cycleLength: Cycle.value
    };

    ShowEvents(userData);
    console.log(userData);
};

function ShowEvents(values) {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
          {
            title  : 'Period',
            start  : '2024-04-20'
          }
        ],
        display: 'background',
        backgroundColor: 'red'
      });
      calendar.render();
};


