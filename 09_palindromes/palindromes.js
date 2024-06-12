const palindromes = function (str) {
    // write two base cases
    str = str.toLowerCase();
    str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    str = str.replace(' ', '')
    if (str.length === 1){
        return true;
    }
    else if(str.length === 2 && str.at(0) === str.at(1)){
        return true;
    }
    // check first and last letters are not the same
    else if(str.at(0) !== str.at(str.length - 1))
        return false;
    // else pass next string 
    else {
        let newStr = str;
        newStr = newStr.slice(1);
        newStr = newStr.substring(0, newStr.length - 1)
        return palindromes(newStr);
    }

};

// Do not edit below this line
module.exports = palindromes;
