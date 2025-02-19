const firstTen = require("./first_10_number");

test("Multiplies of the given number", () => {
  expect(firstTen(3)).toStrictEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
});
