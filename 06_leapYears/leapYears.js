const leapYears = function(year) {
// take in a number
// check if a year is divisible by 4 and not divisible by 100, this is a leap year
if (year % 4 === 0 && year % 100 !== 0){
    return true;
}
else if (year % 400 === 0){
    return true;
}
else{
    return false;
}
// check if a year is division by 400, this is a leap year.
};

// Do not edit below this line
module.exports = leapYears;
