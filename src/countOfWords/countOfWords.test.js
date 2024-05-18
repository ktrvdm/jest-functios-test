const countOfWords = require("./countOfWords");

describe("countOfWords", () => {
  test("with one space", () => {
    expect(countOfWords("корица яблоко клевер")).toBe(2);
  });
  test("with one space & capitall K", () => {
    expect(countOfWords("корица яблоко клевер Кориандр Абрикос")).toBe(3);
  });
  test("with two space & capitall K", () => {
    expect(countOfWords("корица  яблоко  клевер  Кориандр  Абрикос")).toBe(3);
  });
});
