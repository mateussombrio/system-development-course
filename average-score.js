// Exercise: Enter the tests scores and show their average.

let score = null;
let sumScore = null;
let counter = null;

// Create a loop that asks for the grades and then sums them.
while (score != -1) {
  score = parseFloat(prompt("Enter the scores"));
  if (score > 10 || score < -1 || isNaN(score) == true) {
    alert("Enter a valid score");
  } else if (score != -1) {
    sumScore += score;
    counter += 1;
  } else {
    score = 0;
    break;
  }
}
let averageScore = sumScore / counter;
alert(`Your average is ${averageScore}`);
