// Exercise: "Create a program that calculates in how many years country A will surpass country B in population."

// Variables about population and growth rate.
popA = 80000;
popB = 200000;
growth_rate_A = 1.03;
growth_rate_B = 1.015;
i = 0;

// Checks when th popA is bigger the popB (i = years)
while (popA < popB) {
  popA *= growth_rate_A;
  popB *= growth_rate_B;
  i++;
}

// Show the final result
alert(`It will take ${i} years for country A to surpass country B in population.`);
