// Exercise: Create a program that asks for the name of the games, their prices, and informs the total quantity purchased. The maximum budget is $2000.

let budget = 0;
let numGames = [];

// Asks for the names and prices of the games, until reach the maximum budget or press "Enter".
while (budget < 2000) {
  let nameGame = prompt(
    "What is the name of the game? Note: Press 'Enter' to stop."
  );
  numGames.push(nameGame);
  if (nameGame == "") {
    alert(
      `You bought ${numGames.length} and your expenses were $ ${budget} in total.`
    );
    break;
  }

  let gamePrice = Number(
    prompt("What is the price of the game? Note: Press 'Enter' to stop.")
  );
  if (nameGame == String && gamePrice == "") {
    alert(
      `You bought ${
        numGames.length - 1
      } and your expenses were $ ${budget} in total.`
    );
    break;
  } else if (gamePrice == "") {
    alert(
      `You bought ${
        numGames.length - 1
      } and your expenses were $ ${budget} in total.`
    );
    break;
  }
  budget += gamePrice;
}

// If exceed the budget, will alert the user and discount the price of the last game. If reach the maximum limit, the user will be warned.
if (budget > 2000) {
  alert(
    `Your budget were exceed by $ ${
      budget - 2000
    } and the purchase was not made.`
  );
} else if (budget == 2000) {
  alert("Your budget has reached the maximum limit.");
}
