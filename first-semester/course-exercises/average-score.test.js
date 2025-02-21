const averageTestScore = require("./average-score");

test("It must correctly calculate the average", function () {
  expect(averageTestScore([8, 4, 7, 2, 5])).toBeCloseTo(5.2);
});

test("It must fail if have a negative number", function () {
  expect(averageTestScore([8, 4, -1, 4, 3])).toBe(null);
});

test("It must fail if have a '> 10' number", function () {
  expect(averageTestScore([8, 4, 11, 4, 3])).toBe(null);
});

test("It must fail if have a NaN", function () {
  expect(averageTestScore([8, 4, 11, 4, 'a'])).toBe(null);
});