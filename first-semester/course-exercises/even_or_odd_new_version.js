/** Exercise: Create a function that separate the odd and even numbers
 
 *@param {array} numbersArray - Array of numbers
 *@returns {array} - Two arrays. One with the odds and the other with the evens
 
 */

function evenOdd(numbersArray) {
  let oddArray = [];
  let evenArray = [];
  for (let i of numbersArray) {
    if (i % 2 == 0) {
      evenArray.push(i);
    } else {
      oddArray.push(i);
    }
  }
  return [oddArray, evenArray];
}

module.exports = evenOdd