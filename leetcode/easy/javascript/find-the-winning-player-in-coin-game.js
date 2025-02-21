/* You are given two positive integers x and y, denoting the number of coins with values 75 and 10 respectively.

Alice and Bob are playing a game. Each turn, starting with Alice, the player must pick up coins with a total value 115. If the player is unable to do so, they lose the game.

Return the name of the player who wins the game if both players play optimally. */

const winningPlayer = function (x, y) {
  let i = 0;
  while (x > 0 && y > 3) {
    x--;
    y -= 4;
    i++;
  }
  if (i % 2 == 0) {
    return "Bob";
  } else {
    return "Alice";
  }
};
