// Write a function factorial() which tackes a single numeric argument and returns the factorial of that number

// Ex: 3! is 3 x 2 x 1 = 6

function factorial(num) {
  let result = 1;
  // loop down on the number
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(6));
