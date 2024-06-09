const removeFromArray = function(arr1, ...passInArg) {
    // const arg = Array.from(passInArg);
    const newArr = [];
    for (const arg of passInArg){
        //let j = 1; j < arg.length - 1; j++){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] === arg){
                continue;
            }
            else {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
};
// Unsure why the test case 'removes multiple of the same value' fails.
// Use a new array but now the push() functions does double work so it is not correct

// Do not edit below this line
module.exports = removeFromArray;
