const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let total = 0;
  numArray.forEach((num) => {total += num;})
  return total;
};

const multiply = function(numArray) {
  let total = 1;
  numArray.forEach((num) => {total *= num;})
  return total;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
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
