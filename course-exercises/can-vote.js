/**  Exercise: Check if the person is able to vote based on their age.

* @param {number} age - Person's age
* @returns {boolean} - True (can vote) , False (can't vote)

*/
function canVote(age) {
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}
module.exports = canVote;
