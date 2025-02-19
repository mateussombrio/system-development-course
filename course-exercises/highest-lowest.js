/**  Exercise: Create a program that find the highest and lowest value in the array.

*@param {array} numArray - Array of numbers 
*@returns{object} - Object with the highest and lowest values

*/

function highLow(numArray) {
  let highest = numArray[0];
  let lowest = numArray[0];

  for (let i in numArray) {
    if (highest < numArray[i]) {
      highest = numArray[i];
    } else if (lowest > numArray[i]) {
      lowest = numArray[i];
    } else {
      continue;
    }
  }
  return { Highest: highest, Lowest: lowest };
}
module.exports = highLow;
