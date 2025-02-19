/** Exercice: "Ask the user to type a number and create a array with the first 10 numbers of x, showing the result at the end."
 
*@param {number} value - Number
*@returns {array} - Array of the first 10 multipliers

*/

function firstTen(value) {
  let array = [];
  // Multiplies the user's value with the first 10 numbers and add to the array.
  for (let i = 1; i <= 10; i++) {
    let multiplo = value * i;
    array.push(multiplo);
  }
  return array;
}
module.exports = firstTen;
