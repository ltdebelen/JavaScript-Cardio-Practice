// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Ex: slasher([1,2,3], 2) returns [3]

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

console.log(slasher([1, 2, 3], 2));
