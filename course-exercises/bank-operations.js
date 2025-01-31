//Exercise: Performs basic money deposit and withdrawal operations.

let balance = 500;
let account = parseFloat(prompt("Enter your bank account number"));
let operation = prompt(
  "What type of operation would you like to perform (Balance, Deposit, or Withdrawal)?"
);

switch (operation) {
  case "Balance":
    alert(`Your balance is ${balance}.`);
    break;

  case "Deposit":
    let deposit = parseFloat(prompt("What is the amount to be deposited?"));
    balance += deposit;
    alert(`The amount has been deposited. Your current balance is: ${balance}`);
    break;

  case "Withdrawal":
    let withdrawal = parseFloat(prompt("What is the amount to be withdrawn?"));
    if (balance >= withdrawal) {
      balance -= withdrawal;
      alert(
        `The amount has been withdrawn. Your current balance is: ${balance}`
      );
    } else {
      alert("Your balance is insufficient. Please choose a valid amount.");
    }
    break;

  default:
    alert("Please choose a valid option.");
}
