// Compulsory user inputs: name, period start date

// If period length undefined, default to 5 days
// If cycle length undefined, default to 28 days

// Create object to store user data
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

//changing data types
const currentDate = new Date();
const userPeriodStage = userPeriodStartDate - currentDate;

// use user data on the calender
switch(userPeriodStartDate){
    case(userPeriodStartDate > 5):
        break;
}