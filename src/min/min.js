const min = (a, b, c) => {
  let min = 0;
  a = Math.abs(a);
  b = Math.abs(b);
  c = Math.abs(c);
  if (a < b) min = a;
  else min = b;
  if (min > c) min = c;
  return min;
};

module.exports = min;
