//Exercise: Create a function tha return your BMI.

function bmi() {
  let weight = parseFloat(prompt("Enter your weight (Kg): "));
  let height = parseFloat(prompt("Enter your height (m): "));
  return Math.round(weight / (height * height));
  console.log("Your BMI is: ", imc(weight, height));
}

module.exports = bmi