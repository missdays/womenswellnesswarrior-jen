document.addEventListener("DOMContentLoaded", function() {
    // Get current day
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    // Calculate rotation for the indicator
    var rotation = (360 / 28) * (currentDay - 1);
    // Apply rotation to the indicator
    var indicator = document.querySelector(".indicator");
    indicator.style.transform = "translate(-50%, -50%) rotate(" + rotation + "deg)";
  });

const pieChart = document.getElementsByClassName("pie-chart");
const childElements = pieChart.children;
console.log(childElements[0]);

for (let i = 0; i < childElements.length; i++) {
    let angle = 12;
    let child = childElements[i];
    child.classList.add('transform: rotateZ(angle deg)');
    angle += 12;
  }
console.log("2")