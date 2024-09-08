const add = function(...number) {
	let total = 0;
  for (const num of number){
    total += num;
  }
  return total;
  //return sum(min, max);
};

const subtract = function(min, max) {
	return min - max;
};

const sum = function(array) {
  let total = 0;
	array.forEach(num => {
    total += num;
  })
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(num => {
    total *= num;
  })
  return total;
};

const power = function(min, max) {
	return min ** max;
};

const factorial = function(num) {
  let total = num
  if (num === 0){
    return 1;
  }
	while (num > 1){
    num--;
    total *= num;
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
