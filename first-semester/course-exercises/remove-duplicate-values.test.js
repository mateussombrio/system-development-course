const removeDuplicateNumbers = require("./remove-duplicate-values");

test("Remove duplicate values", () => {
  expect(removeDuplicateNumbers([1, 3, 2, 5, 2, 8, 8, 5, 7])).toStrictEqual([
    1, 2, 3, 5, 7, 8,
  ]);
});
