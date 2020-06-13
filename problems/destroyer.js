// Remove all the elements of the initial array that are of the same value of the arguments

function destroyer(arr) {
  // Place the initial array and optional parameters in a single array.
  let args = Array.from(arguments);
  let condition = args.splice(1);
  let result = [];

  // Loop through the array value
  for (let i = 0; i < arr.length; i++) {
    // save the non-matching elements from the condition and original array
    if (condition.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Ex: destroyer([1,2,3,1,2,3], 2, 3); returns [1,1]
