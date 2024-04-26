//CONTAINERS
const StartCalculation = document.getElementById('start-button')
const StartDate = document.getElementById('start-date')
const PeriodTime = document.getElementById('period-time')
const Cycle = document.getElementById('cycle')
const CalendarSection = document.getElementById('calendar-section')
const FormSection = document.getElementById('form-section')
const EditPeriod = document.getElementById('edit-period')

//The event listener for the Edit button will take the user back to the form section
EditPeriod.addEventListener('click', () => {

  window.location.href = 'formw.html'

});

window.onload = function () {
  FormSection.classList.add('hide');
  CalendarSection.classList.remove('hide');
  CalculatePeriod();
};

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
  endinng = happening.setDate(happening.getDate() + parseInt(lengthPeriod) - 1);

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
  peakStart = peak.setDate(peak.getDate() + 5);
  peakEnd = peak.setDate(peak.getDate() + 4);

  return peakStart, peakEnd;
}