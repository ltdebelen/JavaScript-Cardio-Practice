// Return the lowest index at which a value (second arg) should be inserted into an array (first arg) once it has been sorted. The return value should be a number.

// Ex: getIndexToIns([1,2,3,4] 1.5) returns 1 because it is greater than 1 (index 0) and less than 2 (index 1);

function getIndexToIns(arr, num) {
  let index = 0;
  // Loop through the array,
  // find the value of the current iteration that is less than num
  // get the index
  // the break statement will ensure that we are jumping out of the loop whenever we find the correct index for the number.
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
