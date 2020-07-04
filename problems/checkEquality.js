// In this challenge, you must verify the equality of two different given parameters: a and b.

// Ex: checkEquality(1,  1) ➞ true; checkEquality(0, "0") ➞ false

function checkEquality(first, second) {
  if (first && second === 1) {
    return true;
  }
  return false;
}

console.log(checkEquality(1, 1));
