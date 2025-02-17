/** Exercise: Enter the tests scores and show their average.

* @param {array} scores - List of the scores
* @returns {number} - Average score of the array

*/
function averageTestScore(scores) {
  let sumScore = 0;
  let counter = 0;

  // Create a loop that asks for the grades and then sums them.
  for (let number of scores) {
    if (number > 10 || number <= -1 || isNaN(number)) {
      return null;
    } else {
      sumScore += number;
    }
  }
  let averageScore = sumScore / scores.length;
  return averageScore;
}
module.exports = averageTestScore;
