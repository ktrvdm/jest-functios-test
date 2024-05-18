const min = require("./min.js");

describe("min function test", () => {
  test("positive numbers", () => {
    expect(min(2, 1, 12)).toBe(1);
  });
  test("args with zero", () => {
    expect(min(2, 5, 0)).toBe(0);
  });
  test("args with all zero", () => {
    expect(min(0, 0, 0)).toBe(0);
  });
  test("negative numbers", () => {
    expect(min(4, 2, -3)).toBe(2);
  });
});
