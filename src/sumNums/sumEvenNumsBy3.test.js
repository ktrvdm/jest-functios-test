const sumEvenNumsBy3 = require("./sumEvenNumsBy3");

describe("sumEvenNumsBy3", () => {
  test("from 0", () => {
    expect(sumEvenNumsBy3(0, 25)).toBe(60);
  });
  test("from negative", () => {
    expect(sumEvenNumsBy3(-6, 20)).toBe(30);
  });
  test("from 0 to 0", () => {
    expect(sumEvenNumsBy3(0, 0)).toBe(0);
  });
});
