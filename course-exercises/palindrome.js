/**  Exercise: Create a program that checks if it is a palindrome or not.

*@param {string} word - Word
*@returns {string} - Is a palindrome or not

*/
function palindrome(word) {
  word = word.toLowerCase();
  let length = word.length;
  let counter = 0;

  //Checks if the first and last letter are the same.
  for (i = 0; i < length / 2; i++) {
    if (word[i] == word[length - 1 - i]) {
      counter++;
    }
  }
  if (counter == length / 2) {
    console.log("It is a palindrome.");
  } else {
    console.log("It is not a palindrome.");
  }
}
module.exports = palindrome;
