const fibonacci = function(elementInSeries) {
    if (typeof(elementInSeries) != Number){    
        elementInSeries = Number(elementInSeries);
    }
    if (elementInSeries < 0){
        return "OOPS"
    }
    if (elementInSeries === 0){
        return 0;
    }
    else if (elementInSeries === 1){
        return 1;
    }
    else {
        return fibonacci(elementInSeries - 1) + fibonacci(elementInSeries - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
