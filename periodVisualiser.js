import periodInfo from "./periodInfo.json" with { type: "json" };

const userPeriodLength = 5;
const userCycleLength = 28;



// switch statement
function displayInfo(periodStartDate){
    // determine date difference
    const currentDate = new Date();
    console.log(currentDate);
    const dateDifference = Math.abs(currentDate - periodStartDate);
    const diffDays =  Math.ceil(dateDifference / (1000 * 60 * 60 * 24));
    console.log(dateDifference);
    let periodInfoText
    // determine user phase lengths
    const userFollicularphaseEnd = userCycleLength / 2;
    const userOvulationPhaseEnd = userCycleLength / 2.4;
    const userLutealPhaseEnd = userCycleLength / 9;
    switch (dateDifference, userPeriodLength){
        case dateDifference < userPeriodLength:
            return periodInfoText = periodInfo[1]["phase"];
        case dateDifference > userPeriodLength && dateDifference < userFollicularphaseEnd:
            return periodInfoText = periodInfo[2]["phase"];
        case dateDifference > userFollicularphaseEnd && dateDifference < userOvulationPhaseEnd:
            return periodInfoText = periodInfo[3]["phase"];
        case dateDifference > userOvulationPhaseEnd && dateDifference < userLutealPhaseEnd:
            return periodInfoText = periodInfo[4]["phase"];
    }
    const test1 = new Date("2024-04-02")
    console.log(test1);
    console.log(displayInfo(test1));
    document.getElementById("textbox").innerText = periodInfo[0]["phase"];

}


// page load
document.onload(displayInfo("2/04/2024"));