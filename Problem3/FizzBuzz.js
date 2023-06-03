/**
 * Print Fizz Buzz using the provided parameter.
 *
 * @param {Number} num - The input number.
 * @returns {Array} which prints of the fizz Buzz combination
 */

const printFizzBuzz = (num = 100) => {
  // checking the type of the num argument passed
  if (typeof num !== 'number') {
    return `Provide a Number`;
  }
  // creating an array
  const array = Array.from({ length: num }, (_, index) => index + 1);

  // new array which consists of fizz Buzz
  return array.map((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      return 'FizzBuzz';
    } else if (element % 3 === 0) {
      return 'Fizz';
    } else if (element % 5 === 0) {
      return 'Buzz';
    } else {
      return element;
    }
  });
};

const result = printFizzBuzz();
console.log(...result);
