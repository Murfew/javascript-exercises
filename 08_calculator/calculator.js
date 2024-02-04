const add = (x, y) => {
	return x + y
};

const subtract = (x, y) => {
	return x - y
};

const sum = (a) => {
	return a.reduce((total, num) => {
    return total + num
  }, 0)
};

const multiply = (a) => {
  return a.reduce((total, num) => {
    return total * num
  }, 1)
};

const power = (x, y) => {
	return x ** y
};

const factorial = (x) => {

  if (x === 1 || x === 0) {
    return 1
  }

  return x * factorial(x - 1)
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
