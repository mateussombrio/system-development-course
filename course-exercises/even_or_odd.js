// Exercise: "Ask the user how many numbers they want to input and include the entered numbers in an array of numbers.
// Separate the numbers into two groups: one for even numbers and another for odd numbers, showing the result at the end."

// Create the array and ask the user how many numbers to enter.
let times = Number(prompt("Enter the number of times."));
let array = [];
let arrayEven = [];
let arrayOdd = [];

// Add the number to the array.
for (i = 0; i < times; i++) {
  let num = Number(prompt("Enter a number."));
  array.push(num);
}

// Checks if the number is even or odd and insert in the right array.
for (j = 0; j < times; j++) {
  if (array[j] % 2 == 0) {
    arrayEven.push(array[j]);
  } else {
    arrayOdd.push(array[j]);
  }
}
// Show the final result.
console.log(array);
console.log(`Even Array: ${arrayEven}`);
console.log(`Odd Array: ${arrayOdd}`);
