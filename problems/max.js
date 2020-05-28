// Write a function max() that accepts an array of numbers and returns the maximum number in the array

// Ex: max([1, 2, 3]) returns 3;

function max(arr) {
  // Set variable to dump the "highest" value in each iteration of the loop.
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    // If the current element is bigger than the value of the max variable, then we need to set the value of the max variable to the current iteration value from the loop.
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(max([1, 2, 99]));
