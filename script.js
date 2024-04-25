// const userData = {
//     name: "",
//     periodStartDate: "",
//     periodLength: "",
//     cycleLength: "",
// };

// // // Serialize object to put into localStorage
// // const userDataSerialized = JSON.stringify(userData);
// // // Store in localStorage
// // localStorage.setItem("userData", userDataSerialized);
// // // Retrieve from localStorage
// // const userName = JSON.parse(localStorage.getItem("userData")).name;
// // const userPeriodStartDate = JSON.parse(
// //     localStorage.getItem("userData")
// // ).periodStartDate;
// // const userPeriodLength = JSON.parse(
// //     localStorage.getItem("userData")
// // ).periodLength;
// // const userCycleLength = JSON.parse(
// //     localStorage.getItem("userData")
// // ).cycleLength;

// //Variables
// // let ButtonToYear = document.getElementById('change-year')
// // let ButtonToMonth = document.getElementById('change-month')
// let StartCalculation = document.getElementById('start-button')
// let StartDate = document.getElementById('start-date')
// let PeriodTime = document.getElementById('period-time')
// let Cycle = document.getElementById('cycle')
// let CalendarSection = document.getElementById('calendar-section')
// let FormSection = document.getElementById('form-section')
// let EditPeriod = document.getElementById('edit-period')
// let UserName = document.getElementById('user-name')

// //Event listeners
// StartCalculation.addEventListener('click', showCalendar);
// EditPeriod.addEventListener('click', showForm);
// // ButtonToYear.addEventListener('click', changeToYear);
// // ButtonToMonth.addEventListener('click', ChangeToMonth);

// /** 
//  * When page loads the form inputs are displayed
// */
// window.onload = showForm();

// function showForm() {
//     CalendarSection.classList.add('hide')
//     FormSection.classList.remove('hide')
// };

// function showCalendar() {
//     FormSection.classList.add('hide')
//     CalendarSection.classList.remove('hide')

//     CalculatePeriod();
// };

// function CalculatePeriod() {
// //users data are stored in an object variable
//     const userData = {
//         name: UserName.value,
//         periodStartDate: StartDate.value,
//         periodLength: PeriodTime.value,
//         cycleLength: Cycle.value
//     };

//     periodEnd(userData);
//     prePeriod(userData);
//     postPeriod(endinng);
//     peakOvulation(endinng);

// /*
// *the code to show the calendar with the events
// */
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         timeZone: 'local',
//         initialView: 'dayGridMonth',
//         height: 400,
//         headerToolbar: {
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,multiMonthYear'
//         },
//         events: [
//             {
//                 title: 'Period',
//                 start: userData.periodStartDate,
//                 end: endinng,
//                 // display: 'background',
//                 color: 'lightcoral',
//                 textColor: 'black',
//             },
//             {
//                 title: 'Pre-Period',
//                 start: preStart,
//                 end: preEnd,
//                 //display: 'background',
//                 color: 'lightblue',
//                 textColor: 'black'
//             },
//             {
//                 title: 'Post-Period',
//                 start: postStart,
//                 end: postEnd,
//                 //display: 'background',
//                 color: 'lightgreen',
//                 textColor: 'black'
//             },
//             {
//                 title: 'Peak Ovulation',
//                 start: peakStart,
//                 end: peakEnd,
//                 //display: 'background',
//                 color: '#bb83bb',
//                 textColor: 'black'
//             }
//         ],
//     });
//     calendar.render();
//     console.log(userData);
// };

// function periodEnd(values) {
//     //To calculate the end date of the period
//     happening = new Date(values.periodStartDate);
//     endinng = happening.setDate(happening.getDate() + parseInt(values.periodLength));

//     return endinng;
// }

// function prePeriod(values) {
//     //To calculate the pre-period
//     pre = new Date(values.periodStartDate);
//     preEnd = pre.setDate(pre.getDate() - 1);
//     preStart = pre.setDate(pre.getDate() - 1);

//     return preStart, preEnd;
// }

// function postPeriod(endOfPeriod) {
//     //To calculate the post-period
//     post = new Date(endOfPeriod);
//     postStart = post.setDate(post.getDate() + 1);
//     postEnd = post.setDate(post.getDate() + 1);

//     return postStart, postEnd;
// }

// function peakOvulation(endOfPeriod) {
//     //To calculate the peak ovulation
//     peak = new Date(endOfPeriod);
//     peakStart = peak.setDate(peak.getDate() + 6);
//     peakEnd = peak.setDate(peak.getDate() + 5);

//     return peakStart, peakEnd;
// }


// // function changeToYear() {
// //     var calendarEl = document.getElementById('calendar');
// //     var calendar = new FullCalendar.Calendar(calendarEl, {
// //         initialView: 'multiMonthYear',
// //     });
// //     calendar.render();
// // };

