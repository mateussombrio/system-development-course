//Exercise: Create a function tha return your BMI.

let weight = parseFloat(prompt("Enter your weight (Kg): "));
let height = parseFloat(prompt("Enter your height (m): "));

function imc(weight, height) {
  return weight / (height * height);
}
console.log("Your BMI is: ", imc(weight, height));
