const removeFromArray = function(arr1, ...passInArg) {
    // const arg = Array.from(passInArg);
    for (const arg of passInArg){
        //let j = 1; j < arg.length - 1; j++){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] === arg){
                arr1.splice(i, 1);
            }
        }
    }
    return arr1;
};
//Unsure why the test case 'removes multiple of the same value' fails.

// Do not edit below this line
module.exports = removeFromArray;
