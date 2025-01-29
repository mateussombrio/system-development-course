// Exercise: Create a program that checks if it is a palindrome or not.
function palindrome(word) {
  //let word = word.toLowerCase();
  let counter = 0;
  let length = word.length;

  // Reduce the length of words that are not even.
  if (length % 2 != 0) {
    length--;
  }

  //Checks if the first and last letter are the same.
  for (i = 0; i < length / 2; i++) {
    if (word[i] == word[length - i]) {
      counter++;
    }
  }
  if (counter == length / 2) {
    console.log("It is a palindrome.");
  } else {
    console.log("It is not a palindrome.");
  }
}

// Test
console.log(palindrome("RADAR"));
