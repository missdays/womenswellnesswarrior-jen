//user input
//boolean are you on your period currently?
// when did your  period/ last period start
// how long is a typical period (if idk selected choose 5 days)
// calendar insert for days 26-28 for reduced activity
// day 1/2 recommend higher absorbency products

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

    GetValues();
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

function GetValues() {
    let values = [{
        startDate: StartDate.value,
        periodTime: PeriodTime.value,
        cycle: Cycle.value
    }]

    //ShowEvents(values);
    console.log(values);
};

/*function ShowEvents(values) {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2014-11-10',
        initialView: 'timeGridWeek',
        events: [
          {
            start: values.startDate,
            end: values.startDate + values.periodTime,
            display: 'background',
            backgroundColor: 'red'
          }
        ]
      });
      calendar.render();
};*/
