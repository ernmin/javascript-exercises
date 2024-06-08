const repeatString = function(str, numOfTimes) {
        numOfTimes = parseInt(numOfTimes);
        if (Math.sign(numOfTimes) < 0){
            return 'ERROR';
        }
        let finalStr = "";
        for (let i = 0; i < numOfTimes; i++){
            finalStr += str; 
        }
        return finalStr;
};

// Do not edit below this line
module.exports = repeatString;