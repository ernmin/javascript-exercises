const reverseString = function(str) {
    let holdStr = "";
    for (let i = str.length-1; i >= 0; i--){
        holdStr += str[i];
    }
    return holdStr;
};

// Do not edit below this line
module.exports = reverseString;
