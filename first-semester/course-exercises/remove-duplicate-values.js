// Exercise: "Prompt the user to specify how many numbers they want to enter and include the entered numbers in an array.
// Remove all duplicate values and return a new array without repetitions.

function removeDuplicateNumbers(numArray) {
  let newArray;
  // Sort the array (using bubble sort).
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray.length - i - 1; j++) {
      if (numArray[j] > numArray[j + 1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
  }

  // Remove duplicate values
  for (let k = 0; k < numArray.length; k++) {
    if (numArray[k] == numArray[k + 1]) {
      numArray.splice(k, 1);
    }
  }
  return numArray;
}
module.exports = removeDuplicateNumbers;
