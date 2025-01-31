// Exercise: Checks if the number is prime or not.

let number = Number(prompt("Enter a number."));
let prime_counter = 0;

for (i = 1; i < number ** (1 / 2); i++) {
  if (number % i == 0) {
    prime_counter += 1;
    if (number == i) {
      prime_counter += 0;
    } else if (number % number == 0) {
      prime_counter += 1;
    }
  }
}
if (prime_counter - counter <= 2) {
  alert("It is prime.");
} else {
  alert("It is not prime.");
}
