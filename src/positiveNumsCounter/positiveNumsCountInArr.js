const positiveNumsCountInArr = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
};

module.exports = positiveNumsCountInArr;
