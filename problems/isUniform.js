// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

// Ex: isUniform([1,1,1]) returns true; isUniform([1,1,2]) returns false;

function isUniform(arr) {
  // Loop through array values, and compare val of first index to the rest of the elements.

  for (let i = 0; i < arr.length; i++) {
    // Comparing the initial index of the array to the elements being looped on. if they are not equal, return false
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1, 1, 1]));
