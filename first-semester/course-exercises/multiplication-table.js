// Exercise: Print the multiplication table of the entered number (The exercise was a simple test to practice functions calling other functions).

let value = parseInt(prompt("Enter a number?"));

function tabuada(num) {
  for (i = 0; i <= 10; i++) {
    if (par_impar(num * i)) {
      console.log(`${num} X ${i} = ${num * i}`);
    }
  }
}

function par_impar(test) {
  if (test % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(tabuada(value));
