// Write a function that splits an array (first agrgument) into groups the length of size (second argument) and returns them as two-dimensional array.

// Ex: chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a","b"], ["c", "d"]]

function chunkArrayInGroups(arr, size) {
  let twoDimensionalArr = [];

  while (arr.length > 0) {
    twoDimensionalArr.push(arr.splice(0, size));
  }

  return twoDimensionalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
