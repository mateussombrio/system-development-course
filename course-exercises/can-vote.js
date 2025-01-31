// Exercise: Check if the person is able to vote based on their age.

let age = Number(prompt("What is your age?"));
if (age < 16) {
  alert("Can't vote.");
} else if (age >= 18 && age <= 69) {
  alert("Compulsory vote.");
} else {
  alert("Opcional vote.");
}
