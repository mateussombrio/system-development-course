const evenOdd = require("./even_or_odd_new_version");

test("Create a array with even and odd numbers", () => {
  expect(evenOdd([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
    [1, 3, 5, 7, 9],
    [0, 2, 4, 6, 8],
  ]);
});
