// Exercise: "Prompt the user to specify how many numbers they want to enter and include the entered numbers in an array.
// Remove all duplicate values and return a new array without repetitions, displaying the result at the end."

let times = Number(prompt("Enter the number of times."));
let array = [];

// Ask the user to enter a number and add it inside the array.
for (let h = 0; h < vezes; h++) {
  let num = Number(prompt("Enter a number."));
  array.push(num);
}

// Sort the array (using bubble sort).
for (let i = 0; i < vezes; i++) {
  for (let j = 0; j < vezes - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

// Remove duplicate values
for (let k = 0; k < array.length; k++) {
  if (array[k] == array[k + 1]) {
    delete array[k];
  }
}

// Show the final result
console.log(array);
