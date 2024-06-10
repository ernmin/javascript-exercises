const sumAll = function(num1, num2) {
// take in 2 numbers
// check if it both are positive numbers, if not return an error
if (typeof(num1) != "number" || typeof(num2) != "number"){
    return "ERROR";
}
else if (Math.sign(num1) != 1 || Math.sign(num2) != 1){
    return "ERROR";
}

// compare which is bigger, if num1 is bigger swap num1 with num2
if (num1 > num2){
    let hold;
    hold = Number(num2);
    num2 = num1;
    num1 = hold;
}
// loop through from smaller to bigger
let total = 0;
for (i = num1; i <= num2; i++){
    total += i;
}
return total;
};

// Do not edit below this line
module.exports = sumAll;
