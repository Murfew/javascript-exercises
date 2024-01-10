const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !="number" || typeof num2 != "number") {return "ERROR"}

    let upperBound = Math.max(num1, num2)
    let lowerBound = Math.min(num1, num2)

    let topSum = (upperBound * (upperBound + 1)) / 2
    let bottomSum = ((lowerBound * (lowerBound + 1)) / 2) - 1

    return topSum - bottomSum


};

// Do not edit below this line
module.exports = sumAll;
