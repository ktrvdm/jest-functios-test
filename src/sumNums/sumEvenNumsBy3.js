const sumEvenNumsBy3 = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      if (i % 3 == 0) {
        sum += i;
      }
    }
  }
  return sum;
};

module.exports = sumEvenNumsBy3;
