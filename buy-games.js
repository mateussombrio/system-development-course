// Exercise: Ask the name of the games and their prices. If exceeds $2000, show their values and the amount of them.

let totalCost = 0;
let i = 0;
let biggerValue = 0;
let lowestValue = 0;
let gameValue;

// Ask the name and price of the game, until reach $2000
while (totalCost < 2000) {
  let gameName = prompt("Game name: ");
  gameValue = Number(prompt("Game value: "));
  if (biggerValue > gameValue) {
    lowestValue = gameValue;
  }
  totalCost += gameValue;
  i++;
}

// Show the total value and amount of games, excluing the
if (totalCost > 2000) {
  totalCost -= gameValue;
  i--;
  alert(`Total spent: $${totalCost}.\nAmount of games: ${i}`);
} else if (totalCost == 2000) {
  alert(`Total spent: ${totalCost}.\nAmount of games: ${i}`);
}
