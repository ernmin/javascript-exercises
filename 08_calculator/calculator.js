const add = function(num1, num2, ...restofnums) {
  let add = 0;
  add = num1 + num2;
  if (restofnums.length !== 0){
    for (const num in restofnums){
      add += num;
    }
  }
  return add;
	
};

const subtract = function(num3, num4) {
  let subtraction = 0;
  if (num3 > num4){
    subtraction = num3 - num4;
  }
  else {
    subtraction = num4 - num3;
  }
  return subtraction;
	
};

const sum = function(arr1) {
  if (arr1.length === 0){
      return 0;
  }
  let sum = 0;
  for (let num in arr1){
      sum += parseInt(arr1[num]);
  }
  return sum;
      
};

const multiply = function(arrToMultiply) {
  let product = 1;
  if (arrToMultiply.length !== 0){
    for (const num in arrToMultiply){
      product *= parseInt(arrToMultiply[num]);
    }
  }
  return product;
}

const power = function(base, exponent) {
  return base ** exponent;
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
