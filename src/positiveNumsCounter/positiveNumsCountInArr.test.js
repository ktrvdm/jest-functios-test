const positiveNumsCountInArr = require("./positiveNumsCountInArr");

describe("positiveNumsCountInArr", () => {
  test("arr = [0, 1, 2, 3, 4]", () => {
    expect(positiveNumsCountInArr([0, 1, 2, 3, 4])).toBe(2);
  });
  test("arr = [-1, 1, 2, 3, 4]", () => {
    expect(positiveNumsCountInArr([-1, 1, 2, 3, 4])).toBe(2);
  });
  test("arr = [-1, -2, -6, 7, 8, -8]", () => {
    expect(positiveNumsCountInArr([-1, -2, -6, 7, 8, -8])).toBe(1);
  });
  test("arr = [-1, -2, -6, -8]", () => {
    expect(positiveNumsCountInArr([-1, -2, -6, -8])).toBe(0);
  });
  test("arr = [-1, -2, -6, -8, 7]", () => {
    expect(positiveNumsCountInArr([-1, -2, -6, -8, 7])).toBe(0);
  });
});
