const growthRate = require("./population-rate");

test("Checks how many years country A will surpass country B.", () => {
  alert = jest.fn();
  growthRate(2, 5000, 1.5, 10000);
  expect(alert).toHaveBeenCalledWith(
    "It will take 3 years for country A to surpass country B in population."
  );
});
