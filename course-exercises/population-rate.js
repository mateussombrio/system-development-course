// Exercise: "Create a program that calculates in how many years country A will surpass country B in population."

// Variables about population and growth rate.
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