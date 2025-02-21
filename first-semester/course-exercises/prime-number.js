/** Exercise: Checks if the number is prime or not.

*@param {number} number - Number
*@returns {alert} - It is prime or not

*/
function isPrime(number) {
  let prime_counter = 0;

  for (let i = 1; i <= number ** (1 / 2); i++) {
    if (number % i == 0) {
      prime_counter += 1;
    }
  }
  if (prime_counter > 2) {
    alert("It is not prime.");
  } else {
    alert("It is prime.");
  }
}

module.exports = isPrime;
