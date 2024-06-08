const reverseString = function(str) {
    let holdStr = str;
    for (let i = str.length; i > 0; i--){
        holdStr[str.length - i] += str[i];
    }
    return holdStr;
};

// Do not edit below this line
module.exports = reverseString;
