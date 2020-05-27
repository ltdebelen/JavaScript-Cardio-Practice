// Write a function isEven() which takes a single numeric argument and returns "TRUE" if the number is even, and "FALSE" otherwise;

function isEven(num) {
  // Take num and divide it by 2. If the remainder is zero, then it is even.
  if (num % 2 === 0) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

isEven(2); // TRUE
isEven(3); // FALSE
