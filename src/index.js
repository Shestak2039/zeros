module.exports = function zeros(expression) {
  const doubleFactorialArray = [];
  const factorialArray = [];

  expression.split('*').forEach((element) => {
    if (element[element.length - 1] === '!' && element[element.length - 2] === '!') {
      doubleFactorialArray.push(element.replace('!!', ''));
    } else {
      factorialArray.push(element.replace('!', ''));
    }
  });

  if (factorialArray.length === 0 && doubleFactorialArray.filter((element) => element % 2 === 0).length === 0) return 0;

  let countOfZeros = 0;
  doubleFactorialArray.forEach((element) => {
    let number = element;
    while (number > 0) {
      let curr = number;
      while (curr % 5 === 0) {
        countOfZeros++;
        curr /= 5;
      }
      number -= 2;
    }
  });

  factorialArray.forEach((element) => {
    let number = element;
    while (number > 0) {
      let curr = number;
      while (curr % 5 === 0) {
        countOfZeros++;
        curr /= 5;
      }
      number--;
    }
  });

  return countOfZeros;
}
