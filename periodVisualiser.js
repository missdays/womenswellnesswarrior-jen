
//import periodInfo from 'periodInfo.json';

const userPeriodLength = 5;
const userCycleLength = 28;
const periodStartDate = new Date();
// determine date difference
const currentDate = new Date();
const dateDifference = currentDate - periodStartDate

// determine user phase lengths
const userFollicularphaseEnd = userCycleLength * 2;
const userOvulationPhaseEnd = userCycleLength * 2.4;
const userLutealPhaseEnd = userCycleLength * 9;

// switch statement
function displayInfo(dateDifference, userPeriodLength, userOvulationPhaseEnd, userLutealPhaseEnd){
    let periodInfoText
    switch (dateDifference, userPeriodLength){
        case dateDifference < userPeriodLength:
            return periodInfoText = periodInfo[1];
        case dateDifference > userPeriodLength && dateDifference < userFollicularphaseEnd:
            return periodInfoText = periodInfo[2];
        case dateDifference > userFollicularphaseEnd && dateDifference < userOvulationPhaseEnd:
            return periodInfoText = periodInfo[3];
        case dateDifference > userOvulationPhaseEnd && dateDifference < userLutealPhaseEnd:
            return periodInfoText = periodInfo[4];
    }
    document.getElementById("textbox").innerText = periodInfoText;

}


// page load
document.onpageload(displayInfo());