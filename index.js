// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers){
    
    const newArray = drivers.slice(0,2);
    return newArray;
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(drivers){
    const newArray = drivers.slice(2, drivers.length);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){  
    return function(fare){ 
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}