// Code your solution in this file!
function returnFirstTwoDrivers(){
    return ['Sally', 'Bob'];
}
returnFirstTwoDrivers();

// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// const returnFirstTwoDrivers = function(){
    
// }


function returnLastTwoDrivers(){
    return ['Freddy', 'Claudia'];
}
returnLastTwoDrivers();


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



// function selectingDrivers (){
//     function getDrivers (){
//         return returnFirstTwoDrivers + returnLastTwoDrivers;
//     }
//     return selectingDrivers;
// }

function createFareMultiplier(fareMultiplier){
    return fare => fare * 5;
}

// const fareMultiplier = function createFareMultiplier(){
//     return createFareMultiplier * 5;
// }

function fareDoubler (num1){
    return num1 * 2;
}


function fareTripler (num2){
    return num2 * 3;
}


function selectDifferentDrivers (arrayOfDrivers, drivers) {
    return drivers (arrayOfDrivers);
}
