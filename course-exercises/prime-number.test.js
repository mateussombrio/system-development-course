const isPrime = require("./prime-number");

test("Checks if is a prime number", () => {
  alert = jest.fn();
  isPrime(11);
  isPrime(3);
  isPrime(23);
  isPrime(-1);
  expect(alert).toHaveBeenCalledWith("It is prime.");
});

test("Checks if is not a prime number", () => {
  alert = jest.fn();
  isPrime(24);
  isPrime(529);
  isPrime(-4);
  expect(alert).toHaveBeenCalledWith("It is not prime.");
});
