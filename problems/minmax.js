// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Ex: minMax([1, 2, 3,]) ➞ [1, 3]

function minMax(arr) {
  let min = arr[0];
  let max = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  result.push(min);
  result.push(max);

  return result;
}

console.log(minMax([1, 2, 3]));
