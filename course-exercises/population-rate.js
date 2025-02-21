/** Exercise: "Create a program that calculates in how many years country A will surpass country B in population."

*@param {number} popA - Population of country A
*@param {number} popB - Population of country B
*@param {number} rateA - Growth rate of country A
*@param {number} rateB - Growth rate of country B
*@returns {string} - How many years will take

*/
function growthRate(rateA, popA, rateB, popB) {
  years = 0;

  // Checks when the popA is bigger the popB
  while (popA < popB) {
    popA *= rateA;
    popB *= rateB;
    years++;
  }

  // Show the final result
  alert(
    `It will take ${years} years for country A to surpass country B in population.`
  );
}
module.exports = growthRate