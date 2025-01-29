// Exercise: Create a program that find the highest and lowest value in the array.

let arrayLength = Number(prompt("Enter the array length"));
let array = [];
let highest = array[0];
let lowest = array[0];

// Enter the number and add it in the array
for (i = 0; i < arrayLength; i++) {
  let num = Number(prompt("Enter the number."));
  array.push(num);

// Checks if the added number is higher or lower than the previous number
  if (highest > array[i]) {
    highest = array[i];
  } else if (lowest < array[i]) {
    lowest = array[i];
  } else {
    continue;
  }
}
alert(`The highest value is ${highest} and the lowest is ${lowest}.`);
