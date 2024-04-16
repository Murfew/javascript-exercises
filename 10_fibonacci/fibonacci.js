const fibonacci = function(value) {
    if (value < 0) {
        return "OOPS"
    }

    if (value == 0) {
        return 0
    }
    
    fibs = [1, 1]

    for (let i = 2; i < value; i++) {
        fibs[fibs.length] = fibs[fibs.length - 1] + fibs[fibs.length - 2]
    }

    return fibs[fibs.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
