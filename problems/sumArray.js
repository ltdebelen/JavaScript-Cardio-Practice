// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array.

// Ex: sumArray([1,1,1]) returns 3

function sumArray(arr) {
  // Create variable to hold result;
  let result = 0;

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sumArray([1, 1, 1]));
