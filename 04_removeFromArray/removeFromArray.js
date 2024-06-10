const removeFromArray = function(arr1, ...passInArg) {
    const arg = Array.from(passInArg);
    const newArr = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arg.length; j++){
        // for (const arg of passInArg){
            if (arr1[i] === arg[j]){
                // newArr.push(arr1[i]);
                break;
            }
            else if (arr1[i] !== arg[j] && j === arg.length - 1){
                newArr.push(arr1[i]);
            }
            else if (j !== arg.length - 1){
                continue;
            }

        }
    }
    return newArr;
};
// Unsure why the test case 'removes multiple of the same value' fails.
// Use a new array but now the push() functions does double work so it is not correct

// Do not edit below this line
module.exports = removeFromArray;
