const canVote = require("./can-vote");

test("Can vote if is higher that 16", () => {
  expect(canVote(16)).toBe(true);
  expect(canVote(25)).toBe(true);
});

test("Cant vote if is lower than 16", () => {
  expect(canVote(-1)).toBe(false);
  expect(canVote(15)).toBe(false);
});
