// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Ex: filterArray([1, 2, "a", "b"]) ➞ [1, 2]

function filterArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterArray([1, 2, "a", "b"]));
