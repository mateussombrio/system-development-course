const palindrome = require("./palindrome");

test("Check if is a palindrome", () => {
  console.log = jest.fn();
  palindrome("RADAR");
  palindrome("ANA");
  palindrome("OSSO");
  expect(console.log).toHaveBeenCalledWith("It is a palindrome.");
});

test("Check if is a palindrome", () => {
  console.log = jest.fn();
  palindrome("HOUSE");
  expect(console.log).toHaveBeenCalledWith("It is not a palindrome.");
});
