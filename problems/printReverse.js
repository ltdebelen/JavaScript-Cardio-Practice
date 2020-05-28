// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse.

// Ex: [1,2,3,4] should return 4 3 2 1

function printReverse(arr) {
  // Loop through array starting from highest index value to index 0
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([4, 3, 2, 1]);
