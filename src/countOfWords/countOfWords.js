const countOfWords = (str) => {
  let count = 0;
  let words = str.split(" ");
  for (let w of words) {
    if (w.charAt(0) == "к" || w.charAt(0) == "К") {
      count++;
    }
  }
  return count;
};

module.exports = countOfWords;
