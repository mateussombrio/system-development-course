const highLow = require("./highest-lowest");

test("Checks the highest and lowest values", () => {
  const input = [3,6,2,8,5,10]
  const expectedOutput = {
    Highest : 10, Lowest: 2
  }
  expect(highLow(input)).toEqual(expectedOutput)
});
